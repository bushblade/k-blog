import { gql } from 'graphql-request'
import { useLoaderData } from '@remix-run/react'
import { graphcms } from '~/graphql/graphcms.server'
import { RichText } from '@graphcms/rich-text-react-renderer'

import postStyles from '~/styles/postpage.css'

import MainContent from '~/components/MainContent'
import HomeButton from '~/components/HomeButton'
import Header from '~/components/Header'
import Picture from '~/components/Picture'
import Footer from '~/components/Footer'

import { nearestAspectRatio, trimText } from '~/utils'

import type { EmbedProps } from '@graphcms/rich-text-types'
import type { MetaFunction, LoaderFunction, LinksFunction } from 'remix'
import type { Author, Category, Video } from '~/graphql/graphcmsTypes'
import type { PostWithThumbnail } from '~/types'

const pageQuery = gql`
  query PostPageQuery($slug: String!, $authorId: ID!) {
    categories {
      id
      title
      slug
    }
    author(where: { id: $authorId }) {
      name
      title
      biography
      picture {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { height: 120, width: 120, fit: clip } }
          }
        )
      }
    }
    post(where: { slug: $slug }) {
      id
      categories {
        id
        slug
        title
      }
      coverImage {
        fileName
        height
        width
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: clip, width: 1000 } }
            validateOptions: true
          }
        )
        thumbnail: url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: clip, width: 16 } }
            validateOptions: true
          }
        )
      }
      title
      publishedAt
      content {
        text
        json
        references {
          ... on Video {
            id
            youTubeShareUrl
          }
        }
      }
    }
  }
`

interface Data {
  post: PostWithThumbnail
  author: Author
  categories: Category[]
}

export let loader: LoaderFunction = async ({ params: { post } }) => {
  const data: Data = await graphcms.request(pageQuery, {
    slug: post,
    authorId: process.env.AUTHOR_ID,
  })
  if (!data.post) throw new Error(`No posts found for "${post}"`)
  return data
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: postStyles,
    },
  ]
}

// NOTE: the meta function gets the loader data available in function args
export const meta: MetaFunction = ({
  data,
}: {
  data: { post: PostWithThumbnail }
}) => {
  if (!data) return {}
  if (!data.post) return {}
  return {
    title: data.post.title,
    'og:title': data.post.title,
    'og:image': data.post.coverImage.thumbnail,
    'og:description': trimText(data.post.content.text),
  }
}

export default function PostPage() {
  const { post, author, categories }: Data = useLoaderData()

  const coverImageAspectRatio =
    post.coverImage.width && post.coverImage.height
      ? nearestAspectRatio(post.coverImage.width, post.coverImage.height)
      : '16:9'

  return (
    <>
      <HomeButton />
      <Header>
        <h1 className='text-5xl inline-block'>{post.title}</h1>
      </Header>
      <figure className='m-auto max-w-[1000px] overflow-hidden lg:rounded-box -translate-y-12 bg-base-300'>
        <Picture
          smallSrc={post.coverImage.thumbnail}
          largeSrc={post.coverImage.url}
          alt={post.coverImage.fileName}
          className='m-auto lg:shadow-2xl shadow-current'
          aspectRatio={coverImageAspectRatio}
        />
      </figure>
      <MainContent narrow={true}>
        <RichText
          content={post.content.json}
          references={post.content.references}
          renderers={{
            h1: ({ children }) => (
              <h1 className='text-5xl py-2 font-bold'>{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className='text-4xl py-2 font-bold'>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className='text-3xl py-2 font-bold'>{children}</h3>
            ),
            p: ({ children }) => <p className='py-2'>{children}</p>,
            ol: ({ children }) => (
              <ol className='list-decimal list-inside'>{children}</ol>
            ),
            ul: ({ children }) => (
              <ul className='list-disc list-inside'>{children}</ul>
            ),
            blockquote: ({ children }) => (
              <blockquote className='border-l-4 border-info px-2 py-3 my-3 text-info-content bg-info rounded-box bg-opacity-20 border-opacity-20'>
                {children}
              </blockquote>
            ),
            code_block: ({ children }) => {
              return (
                <div className='mockup-code rounded-box font-mono'>
                  <pre className='no-before pl-5'>{children}</pre>
                </div>
              )
            },
            a: ({ children, openInNewTab, title, ...rest }) => (
              <a
                target={openInNewTab ? '_blank' : '_self'}
                {...rest}
                className={`link link-hover link-primary font-bold ${
                  title ? 'tooltip tooltip-primary' : null
                }`}
                data-tip={title}
              >
                {children}
              </a>
            ),
            img: ({ title, altText, handle }) => (
              <figure style={{ maxWidth: '800px' }} className='mx-auto my-3'>
                <img
                  // NOTE: seems I can use image.handle to get image id
                  loading='lazy'
                  src={`https://media.graphassets.com/resize=fit:crop,width:800/output=format:webp/${handle}`}
                  alt={altText || title}
                  className='m-auto rounded-box w-full max-h-screen'
                />
              </figure>
            ),
            embed: {
              Video: ({ nodeId }: EmbedProps<Video>) => {
                const video = post.content.references.find(
                  (ref) => ref.id === nodeId
                )
                if (!video)
                  return (
                    <div className='alert alert-error shadow-xl'>
                      <p>
                        There should be a video here but something went wrong!
                      </p>
                    </div>
                  )
                const videoId = video.youTubeShareUrl.split('/').reverse()[0]
                return (
                  <div className='max-w-[800px] mx-auto my-3'>
                    <div className='aspect-w-16 aspect-h-9'>
                      <div className='w-full height-full'>
                        <iframe
                          loading='lazy'
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title='YouTube video player'
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                          className='m-auto rounded-box w-full h-full'
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )
              },
            },
          }}
        />
      </MainContent>
      <Footer author={author} categories={categories} />
    </>
  )
}

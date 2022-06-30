import type { EmbedProps } from '@graphcms/rich-text-types'
import { gql } from 'graphql-request'
import { useLoaderData } from '@remix-run/react'
import type { MetaFunction, LoaderFunction, LinksFunction } from 'remix'
import { graphcms } from '~/graphql/graphcms.server'
import MainContent from '~/components/MainContent'
import type { Video } from '~/graphql/graphcmsTypes'
import { RichText } from '@graphcms/rich-text-react-renderer'
import postStyles from '~/styles/postpage.css'
import HomeButton from '~/components/HomeButton'
import Header from '~/components/Header'
import type { PostWithThumbnail } from '~/types'
// import { getWebPsrc } from '~/utils'

// TODO: progressivly load coverimage

const pageQuery = gql`
  query GetPostsBySlug($slug: String!) {
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
            image: { resize: { fit: clip, width: 200 } }
            validateOptions: true
          }
        )
      }
      title
      publishedAt
      content {
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

export let loader: LoaderFunction = async ({ params: { post } }) => {
  const data: { post: PostWithThumbnail } = await graphcms.request(pageQuery, {
    slug: post,
  })
  if (!data.post) throw new Error(`No posts found for ${post}`)
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
export const meta: MetaFunction = ({ data }) => {
  if (data) return { title: data.post.title, 'og:title': data.post.title }
  return {}
}

export default function PostPage() {
  const { post }: { post: PostWithThumbnail } = useLoaderData()
  return (
    <>
      <HomeButton />
      <Header>
        <h1 className='text-5xl inline-block'>{post.title}</h1>
      </Header>
      <img
        src={post.coverImage.url}
        alt={post.coverImage.fileName}
        className='m-auto lg:rounded-box -translate-y-12 lg:shadow-2xl shadow-current'
      />
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
              <blockquote className='border-l-4 border-primary p-2 my-3 text-secondary-content bg-secondary rounded-box bg-opacity-50 border-opacity-50'>
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
              <img
                // src={getWebPsrc(src ? src : '')}
                // NOTE: seems I can use image.handle to get image id
                src={`https://media.graphassets.com/resize=fit:crop,width:800/output=format:webp/${handle}`}
                alt={altText || title}
                className='m-auto rounded-box'
              />
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
                  <div className='max-w-[800px] mx-auto'>
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      className='m-auto rounded-box w-full aspect-video'
                    ></iframe>
                  </div>
                )
              },
            },
          }}
        />
      </MainContent>
    </>
  )
}

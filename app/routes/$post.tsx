import { EmbedProps } from '@graphcms/rich-text-types'
import { gql } from 'graphql-request'
import {
  json,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from 'remix'
import { graphcms } from '~/graphql/graphcms.server'
import MainContent from '~/components/MainContent'
import { Post, Video } from '~/graphql/graphcmsTypes'
import { RichText } from '@graphcms/rich-text-react-renderer'
import postStyles from '~/styles/postpage.css'
import BackArrow from '~/components/BackArrow'
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
  const data: { post: Post } = await graphcms.request(pageQuery, { slug: post })
  return json(data)
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: postStyles,
    },
  ]
}

// the meta function gets the loader data available in function args
export const meta: MetaFunction = ({ data: { post } }) => {
  return { title: post.title }
}

export default function PostPage() {
  const { post }: { post: Post } = useLoaderData()
  console.log(post.coverImage.thumbnail)
  return (
    <>
      <BackArrow />
      <header className='hero bg-base-200 py-32'>
        <div className='hero-content flex content-center align-center'>
          <h1 className='text-5xl font-bold inline-block'>{post.title}</h1>
        </div>
      </header>
      <img
        src={post.coverImage.url}
        alt={post.coverImage.fileName}
        className='m-auto lg:rounded-lg -translate-y-12 lg:shadow-2xl shadow-current'
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
              <blockquote className='border-l-4 border-primary p-2 my-3 text-primary bg-secondary rounded-lg'>
                {children}
              </blockquote>
            ),
            code_block: ({ children }) => {
              return (
                <div className='mockup-code rounded-lg'>
                  <pre className='no-before pl-5'>{children}</pre>
                </div>
              )
            },
            a: ({ children, openInNewTab, title, ...rest }) => (
              <a
                target={openInNewTab ? '_blank' : '_self'}
                {...rest}
                className={`link link-hover link-primary ${
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
                className='m-auto rounded-lg'
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
                  <iframe
                    width='800'
                    height='450'
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='m-auto rounded-lg my-3'
                  ></iframe>
                )
              },
            },
          }}
        />
      </MainContent>
    </>
  )
}

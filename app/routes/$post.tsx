import { gql } from 'graphql-request'
import { useLoaderData } from '@remix-run/react'
import { graphcms } from '~/graphql/graphcms.server'

import postStyles from '~/styles/postpage.css'

import MainContent from '~/components/MainContent'
import HomeButton from '~/components/HomeButton'
import Header from '~/components/Header'
import Picture from '~/components/Picture'
import Footer from '~/components/Footer'

import { nearestAspectRatio, trimText } from '~/utils'

import type {
  MetaFunction,
  LoaderFunction,
  LinksFunction,
} from '@remix-run/node'
import type { Author, Category, Post } from '~/graphql/graphcmsTypes'
import type { AspectRatio, PostWithSmallCoverImage } from '~/types'
import { RichTextRenderer } from '~/components/RichTextRenderer'

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
        small: url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: clip, width: 16 } }
            validateOptions: true
          }
        )
      }
      previewImage {
        fileName
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, width: 200 } }
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
          ... on BlenderModel {
            backgroundColour {
              hex
            }
            id
            title
            glbFile {
              url
            }
          }
        }
      }
    }
  }
`

interface Data {
  post: PostWithSmallCoverImage
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
export const meta: MetaFunction = ({ data }: { data: { post: Post } }) => {
  if (!data) return {}
  if (!data.post) return {}
  return {
    title: data.post.title,
    'og:title': data.post.title,
    'og:image': data.post.previewImage.url,
    'og:description': trimText(data.post.content.text),
  }
}

export default function PostPage() {
  const { post, author, categories }: Data = useLoaderData()

  let coverImageAspectRatio: AspectRatio | null = null
  if (post.coverImage) {
    coverImageAspectRatio =
      post.coverImage.width && post.coverImage.height
        ? nearestAspectRatio(post.coverImage.width, post.coverImage.height)
        : '16:9'
  }

  return (
    <>
      <HomeButton />
      <Header>
        <h1 className='text-5xl inline-block'>{post.title}</h1>
      </Header>
      <div className='border-0 border-transparent m-auto max-w-[1000px] overflow-hidden lg:rounded-box -translate-y-20 bg-base-300 shadow-base-300 shadow-xl'>
        {post.coverImage && coverImageAspectRatio ? (
          <Picture
            smallSrc={post.coverImage.small}
            largeSrc={post.coverImage.url}
            alt={post.coverImage.fileName}
            aspectRatio={coverImageAspectRatio}
          />
        ) : null}
      </div>
      <MainContent narrow={true}>
        <RichTextRenderer content={post.content} />
      </MainContent>
      <Footer author={author} categories={categories} />
    </>
  )
}

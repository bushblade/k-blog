import { useLoaderData } from '@remix-run/react'
import { gql } from 'graphql-request'
import { graphcms } from '~/graphql/graphcms.server'

import Banner from '~/components/Banner'
import MainContent from '~/components/MainContent'
import CategoryLinks from '~/components/CategoryLinks'
import Footer from '~/components/Footer'
import PostsGrid from '~/components/PostsGrid'

import type { Author, Category } from '~/graphql/graphcmsTypes'
import type { LoaderFunction, MetaFunction } from 'remix'
import type { PostWithThumbnail } from '~/types'

const query = gql`
  query HomePageQuery($authorId: ID!) {
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
    posts(orderBy: createdAt_DESC) {
      id
      title
      slug
      createdAt
      categories {
        id
        title
        slug
      }
      content {
        text
      }
      coverImage {
        fileName
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 288, width: 512 } }
          }
        )
        thumbnail: url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 9, width: 16 } }
          }
        )
      }
    }
  }
`

interface Data {
  categories: Category[]
  posts: PostWithThumbnail[]
  author: Author
}

export let loader: LoaderFunction = async () => {
  const data: Data = await graphcms.request(query, {
    authorId: process.env.AUTHOR_ID,
  })
  if (data) {
    return data
  }
  throw new Error('Something went wrong with fetching from CMS')
}

export let meta: MetaFunction = ({ data }: { data: { author: Author } }) => {
  if (data.author)
    return {
      'og:title': `${data.author.name}'s blog site`,
      'og:image': data.author.picture.url,
      'og:description': data.author.title,
    }
  return {}
}

export default function Index() {
  const { categories, author, posts }: Data = useLoaderData()
  return (
    <>
      <Banner author={author} />
      <MainContent>
        <h2 className='text-4xl pt-5'>Posts</h2>
        <div className='divider'></div>

        <CategoryLinks categories={categories} />

        <PostsGrid posts={posts} />
      </MainContent>
      <Footer author={author} categories={categories} />
    </>
  )
}

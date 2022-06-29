import { useLoaderData } from '@remix-run/react'
import { gql } from 'graphql-request'
import { graphcms } from '~/graphql/graphcms.server'
import type { Author, Category, Post } from '~/graphql/graphcmsTypes'
import Banner from '~/components/Banner'
import MainContent from '~/components/MainContent'
import CategoryLinks from '~/components/CategoryLinks'
import PostsGrid from '~/components/PostsGrid'
import type { LoaderFunction } from 'remix'

const query = gql`
  {
    categories {
      id
      title
      slug
    }
    authors {
      id
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
    posts(orderBy: createdAt_DESC, last: 9) {
      id
      title
      slug
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
            image: { resize: { fit: crop, height: 337, width: 600 } }
          }
        )
      }
    }
  }
`

export let loader: LoaderFunction = async () => {
  const data: { categories: Category[]; authors: Author[]; posts: Post[] } =
    await graphcms.request(query)
  return {
    categories: data.categories,
    author: data.authors[0],
    posts: data.posts,
  }
}

export default function Index() {
  const {
    categories,
    author,
    posts,
  }: { categories: Category[]; author: Author; posts: Post[] } = useLoaderData()
  return (
    <>
      <Banner author={author} />
      <MainContent>
        <h2 className='text-4xl pt-5'>Posts</h2>
        <div className='divider'></div>

        <CategoryLinks categories={categories} />

        <PostsGrid posts={posts} />
      </MainContent>
    </>
  )
}

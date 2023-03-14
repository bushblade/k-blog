import { gql } from 'graphql-request'
import { useLoaderData } from '@remix-run/react'
import { graphcms } from '~/graphql/graphcms.server'

import HomeButton from '~/components/HomeButton'
import CategoryIcon from '~/components/CategoryIcon'
import MainContent from '~/components/MainContent'
import NoPostsToShow from '~/components/NoPostsToShow'
import Footer from '~/components/Footer'
import PostsGrid from '~/components/PostsGrid'
import Header from '~/components/Header'

import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node'
import type { PostWithSmallPreview } from '~/types'
import type { Author, Category } from '~/graphql/graphcmsTypes'

const query = gql`
  query CategoryPageQuery($category: String!, $authorId: ID!) {
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
    category(where: { slug: $category }) {
      title
    }
    posts(where: { categories_some: { slug: $category } }) {
      id
      slug
      title
      createdAt
      categories {
        id
        title
        slug
      }
      content {
        text
      }
      previewImage {
        id
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 288, width: 512 } }
          }
        )
        small: url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 9, width: 16 } }
          }
        )
        fileName
      }
    }
  }
`

interface Data {
  author: Author
  categories: Category[]
  posts: PostWithSmallPreview[]
  category: Category
}

interface LoaderData {
  author: Author
  categories: Category[]
  posts: PostWithSmallPreview[]
  category: string
}

export async function loader({ params: { category } }: LoaderArgs) {
  const data: Data = await graphcms.request(query, {
    category,
    authorId: process.env.AUTHOR_ID,
  })
  if (!data.category) {
    throw new Error(`No matching category for "${category}"`)
  }

  return {
    posts: data.posts,
    category: data.category.title,
    author: data.author,
    categories: data.categories,
  }
}

export let meta: MetaFunction<typeof loader> = ({ data }) => {
  // NOTE: need to check if we have data otherwise ErrorBoundry will not catch
  // error thrown in loader
  if (data)
    return {
      title: `${data.author.name}'s ${data.category} posts`,
      'og:title': `${data.author.name}'s ${data.category} posts`,
    }
  return {}
}

export default function CategoryPage() {
  // NOTE: Remix not correctly getting the type here.
  let { posts, category, categories, author } = useLoaderData() as LoaderData

  return (
    <>
      <HomeButton />
      <Header>
        <CategoryIcon category={category} />
        <h1 className='text-5xl inline-block'>{category}</h1>
      </Header>
      <MainContent>
        <h2 className='text-4xl pt-5'>{category} Posts</h2>
        <div className='divider'></div>
        {posts.length > 0 ? (
          <PostsGrid posts={posts} />
        ) : (
          <NoPostsToShow category={category} />
        )}
      </MainContent>
      <Footer author={author} categories={categories} />
    </>
  )
}

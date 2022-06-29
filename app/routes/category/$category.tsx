import { gql } from 'graphql-request'
import type { LoaderFunction, MetaFunction } from 'remix'
import { useLoaderData } from '@remix-run/react'
import HomeButton from '~/components/HomeButton'
import CategoryIcon from '~/components/CategoryIcon'
import MainContent from '~/components/MainContent'
import NoPostsToShow from '~/components/NoPostsToShow'
import PostsGrid from '~/components/PostsGrid'
import { graphcms } from '~/graphql/graphcms.server'
import type { Post } from '~/graphql/graphcmsTypes'
import StackedWave from '~/components/StackedWave'

// need to get the category title too

const query = gql`
  query getPostsByCategory($category: String!) {
    category(where: { slug: $category }) {
      title
    }
    posts(where: { categories_some: { slug: $category } }) {
      id
      slug
      title
      categories {
        id
        title
        slug
      }
      content {
        text
      }
      coverImage {
        id
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 337, width: 600 } }
          }
        )
        fileName
      }
    }
  }
`

export let loader: LoaderFunction = async ({ params: { category } }) => {
  const data = await graphcms.request(query, { category })
  if (!data.category) {
    throw new Error(`No matching category for ${category}`)
  }

  return { posts: data.posts, category: data.category.title }
}

export let meta: MetaFunction = ({ data }) => {
  // NOTE: need to check if we have data otherwise ErrorBoundry will not catch
  // error thrown in loader
  if (data)
    return {
      title: `Koyah's ${data.category} posts`,
    }
  return {}
}

export default function Category() {
  let { posts, category }: { posts: Post[]; category: string } = useLoaderData()

  return (
    <>
      <HomeButton />
      <header className='hero py-28 bg-gradient-to-tl from-base-300 to-base-200 relative'>
        <StackedWave />
        <div className='hero-content flex content-center align-center'>
          <CategoryIcon category={category} />
          <h1 className='text-5xl font-bold inline-block'>{category}</h1>
        </div>
      </header>
      <MainContent>
        {posts.length > 0 ? (
          <PostsGrid posts={posts} />
        ) : (
          <NoPostsToShow category={category} />
        )}
      </MainContent>
    </>
  )
}

import { gql } from 'graphql-request'
import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import BackArrow from '~/components/BackArrow'
import CategoryIcon from '~/components/CategoryIcon'
import MainContent from '~/components/MainContent'
import NoPostsToShow from '~/components/NoPostsToShow'
import PostsGrid from '~/components/PostsGrid'
import { graphcms } from '~/graphql/graphcms.server'
import { Post } from '~/graphql/graphcmsTypes'

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
  if (!category) throw new Error(`No categories match: ${category}`)

  const data = await graphcms.request(query, { category })

  return { posts: data.posts, category: data.category.title }
}

export let meta: MetaFunction = ({ data }) => ({
  title: `Koyah's ${data.category} posts`,
})

export default function Category() {
  let { posts, category }: { posts: Post[]; category: string } = useLoaderData()

  return (
    <>
      <BackArrow />
      <header className='hero bg-base-200 py-28'>
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

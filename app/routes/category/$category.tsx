import { gql } from 'graphql-request'
import { LoaderFunction, useLoaderData } from 'remix'
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
      coverImage {
        id
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 400, fit: clip } }
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

export default function Category() {
  let { posts, category }: { posts: Post[]; category: string } = useLoaderData()
  return (
    <div>
      <h1>Posts matching category: {category}</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.coverImage.url} alt={post.coverImage.fileName} />
        </div>
      ))}
    </div>
  )
}

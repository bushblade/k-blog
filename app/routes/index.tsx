import { json, LoaderFunction, useLoaderData, Link } from 'remix'
import { gql } from 'graphql-request'
import { graphcms } from '~/graphql/graphcms.server'
import { Category } from '~/graphql/graphcmsTypes'

const categoriesQuery = gql`
  {
    categories {
      id
      title
      slug
    }
  }
`

export let loader: LoaderFunction = async () => {
  const data: Category[] = await graphcms.request(categoriesQuery)
  return json(data)
}

export default function Index() {
  const { categories }: { categories: Category[] } = useLoaderData()
  return (
    <div className='app'>
      <h1>Posts</h1>
      <ul>
        {categories.map(({ id, title, slug }) => (
          <li key={id}>
            <Link key={id} to={`category/${slug}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

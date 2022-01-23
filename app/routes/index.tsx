import { json, LoaderFunction, useLoaderData } from 'remix'
import { gql } from 'graphql-request'
import { graphcms } from '~/graphql/graphcms.server'
import { Post } from '~/graphql/graphcmsTypes'

const postsQuery = gql`
  {
    posts {
      id
      title
    }
  }
`

export let loader: LoaderFunction = async () => {
  const data: Post[] = await graphcms.request(postsQuery)
  return json(data)
}

export default function Index() {
  const { posts }: { posts: Post[] } = useLoaderData()
  console.log(posts)
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target='_blank'
            href='https://remix.run/tutorials/blog'
            rel='noreferrer'
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://remix.run/tutorials/jokes'
            rel='noreferrer'
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  )
}

import { gql } from 'graphql-request'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { graphcms } from '~/graphql/graphcms.server'
import MainContent from '~/components/MainContent'
import { Post } from '~/graphql/graphcmsTypes'
import { RichText } from '@graphcms/rich-text-react-renderer'

const query = gql`
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
      }
      title
      publishedAt
      content {
        html
        json
      }
    }
  }
`

export let loader: LoaderFunction = async ({ params: { post } }) => {
  const data: { post: Post } = await graphcms.request(query, { slug: post })
  return json(data)
}

export default function PostPage() {
  const { post }: { post: Post } = useLoaderData()
  return (
    <MainContent>
      <RichText content={post.content.json} />
    </MainContent>
  )
}

import {
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
  useCatch,
  useLoaderData,
} from '@remix-run/react'
import type { LinksFunction, LoaderFunction, MetaFunction } from 'remix'
import Document from './Document'
import { graphcms } from '~/graphql/graphcms.server'
import styles from './tailwind.css'
import ErrorPage from './components/ErrorPage'
import { gql } from 'graphql-request'
import type { Author, Category } from './graphql/graphcmsTypes'
import Footer from './components/Footer'

const rootQuery = gql`
  query AuthorAndCategories($authorId: ID!) {
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
  }
`

interface Data {
  author: Author
  categories: Category[]
}

export let loader: LoaderFunction = async () => {
  const data: Data = await graphcms.request(rootQuery, {
    authorId: process.env.AUTHOR_ID,
  })
  if (!data.author)
    throw new Error(`We didn't find an author with ${process.env.AUTHOR_ID} ID`)
  return data
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'icon', href: '/girl-icon.svg', type: 'image/svg' },
  ]
}

export const meta: MetaFunction = () => {
  return { title: `Koyah's blog` }
}

export default function App() {
  const { author, categories }: Data = useLoaderData()
  return (
    <Document>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === 'development' && <LiveReload />}
      <Footer author={author} categories={categories} />
    </Document>
  )
}

// 404 pages
export function CatchBoundary() {
  const caught = useCatch()
  return (
    <Document title={`Oops! ${caught.status}`}>
      <ErrorPage message={`${caught.status}  ${caught.statusText}`}>
        <p className='text-lg'>I don&apos;t have a page for that</p>
      </ErrorPage>
      <Scripts />
    </Document>
  )
}

// catch errors
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title='Oh no!'>
      <ErrorPage message={error.message} />
      <Scripts />
    </Document>
  )
}

import {
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
  useCatch,
} from '@remix-run/react'

import styles from './tailwind.css'

import Document from './Document'
import ErrorPage from './components/ErrorPage'

import type { LinksFunction, MetaFunction } from '@remix-run/node'

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
  return (
    <Document>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === 'development' && <LiveReload />}
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

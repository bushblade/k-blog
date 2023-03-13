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

import type { ActionArgs, LinksFunction, LoaderFunction } from '@remix-run/node'
import { themeCookie } from './cookies'
import { json } from '@remix-run/node'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'icon', href: '/girl-icon.svg', type: 'image/svg' },
  ]
}

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await themeCookie.parse(cookieHeader)) || {}
  if (!cookie.theme) cookie.theme = 'dracula'
  return cookie
}

export async function action({ request }: ActionArgs) {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await themeCookie.parse(cookieHeader)) || {}
  const bodyParams = await request.formData()

  if (bodyParams.get('theme')) {
    cookie.theme = bodyParams.get('theme')
  }

  return json(null, {
    headers: {
      'Set-Cookie': await themeCookie.serialize(cookie),
    },
  })
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

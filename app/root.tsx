import {
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react'

import styles from './tailwind.css'

import Document from './Document'
import DocumentForBoundry from './DocumentForBoundry'
import ErrorPage from './components/ErrorPage'

import type {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/node'
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

export async function action({ request }: ActionFunctionArgs) {
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

// catch errors
export function ErrorBoundary() {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <DocumentForBoundry title={`Oops! ${error.status}`}>
        <ErrorPage message={`${error.status}  ${error.statusText}`}>
          <p className='text-lg'>I don&apos;t have a page for that</p>
        </ErrorPage>
        <Scripts />
      </DocumentForBoundry>
    )
  } else if (error instanceof Error) {
    return (
      <DocumentForBoundry title='Oh no!'>
        <ErrorPage message={error.message} />
        <Scripts />
      </DocumentForBoundry>
    )
  } else {
    return (
      <DocumentForBoundry title='Oh no!'>
        <ErrorPage message='Unknown Error!' />
        <Scripts />
      </DocumentForBoundry>
    )
  }
}

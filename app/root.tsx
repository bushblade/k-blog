import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'
import type { MetaFunction } from 'remix'

import styles from './tailwind.css'
import ErrorPage from './components/ErrorPage'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'icon', href: '/girl-icon.svg', type: 'image/svg' },
  ]
}

export const meta: MetaFunction = () => {
  return { title: `Koyah's blog` }
}

// TODO: theme switcher
// retro garden business lemonade dracula
const theme: string = 'lemonade'

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang='en' data-theme={theme}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
    </Document>
  )
}

// 404 pages
export function CatchBoundary() {
  const caught = useCatch()
  return (
    <Document title={`Oops! ${caught.status}`}>
      <ErrorPage message={`${caught.status}  ${caught.statusText}`}>
        <p className='text-lg'>I don't have a page for that</p>
      </ErrorPage>
    </Document>
  )
}

// catch errors
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title='Oh no!'>
      <ErrorPage message={error.message} />
    </Document>
  )
}

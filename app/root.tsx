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
    <html lang='en' data-theme='garden'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

// 404 pages
export function CatchBoundary() {
  const caught = useCatch()
  return (
    <html lang='en' data-theme='garden'>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>This is the CatchBoundry</h1>
        <p>
          {caught.status} {caught.statusText}
        </p>
        <Scripts />
      </body>
    </html>
  )
}

// export function ErrorBoundary({ error }: { error: Error }) {
//   console.error(error)
//   return (
//     <html>
//       <head>
//         <title>Oh no!</title>
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <h1>This is the ErrorBoundry</h1>
//         <Scripts />
//       </body>
//     </html>
//   )
// }

import { useEffect, useState } from 'react'
import { Links, Meta } from '@remix-run/react'

export default function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const [theme, setTheme] = useState('dracula')

  useEffect(() => {
    // Fallback for themeing if on an error page
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  return (
    <html lang='en' data-theme={theme}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>{children}</body>
    </html>
  )
}

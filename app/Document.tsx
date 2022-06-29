import { useState, useEffect } from 'react'
import { Links, Meta } from 'remix'
import ThemeIcon from './components/ThemeIcon'
// TODO: theme switcher
// retro garden business lemonade dracula

const themes = [
  { name: 'dracula', dark: true },
  { name: 'retro', dark: false },
  { name: 'business', dark: true },
  { name: 'lemonade', dark: false },
  { name: 'garden', dark: false },
]

export default function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const storedTheme = localStorage.getItem('theme')
    setTheme(storedTheme ? storedTheme : prefersDark ? 'dracula' : 'garden')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

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
        <div className='dropdown dropdown-end dropdown-hover absolute top-8 right-8 z-20'>
          <label
            tabIndex={0}
            className='btn btn-ghost tooltip tooltip-left tooltip-primary'
            data-tip='Change Theme'
          >
            <ThemeIcon />
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            {themes.map((t) => (
              <li key={t.name}>
                <a
                  onClick={() => setTheme(t.name)}
                  className={
                    t.name === theme ? 'bg-primary text-primary-content' : ''
                  }
                >
                  {t.name[0].toUpperCase() + t.name.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {children}
      </body>
    </html>
  )
}

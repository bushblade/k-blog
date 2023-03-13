import { useState, useEffect } from 'react'
import { Links, Meta, useSubmit, useTransition } from '@remix-run/react'
import ThemeIcon from './components/ThemeIcon'
import MoonSVG from './components/MoonSVG'
import SunSVG from './components/SunSVG'
import { useLoaderData } from '@remix-run/react'

const themes = [
  { name: 'garden', dark: false },
  { name: 'dracula', dark: true },
  { name: 'retro', dark: false },
  { name: 'business', dark: true },
  { name: 'lemonade', dark: false },
]

export default function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  // this will be the return of the root loader function
  const loaderData = useLoaderData()
  const submit = useSubmit()
  const [theme, setTheme] = useState(
    loaderData.theme
      ? loaderData.theme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dracula'
      : 'garden'
  )

  useEffect(() => {
    const formData = new FormData()
    formData.append('theme', theme)
    submit(formData, { method: 'post' })
  }, [theme, submit])

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
        <div className='dropdown dropdown-end absolute top-8 right-8 z-20'>
          <button
            name='theme-picker'
            tabIndex={0}
            className='btn btn-ghost tooltip tooltip-left tooltip-primary normal-case font-normal'
            data-tip='Change Theme'
          >
            <ThemeIcon />
          </button>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            {themes.map((t) => (
              <li key={t.name}>
                <button
                  name='set-theme'
                  onClick={() => {
                    setTheme(t.name)
                    if (document.activeElement instanceof HTMLElement) {
                      // whatever element has focus when dropdown is open blur
                      // it so it loses focus and the dropdown closes
                      document.activeElement.blur()
                    }
                  }}
                  className={
                    t.name === theme ? 'bg-primary text-primary-content' : ''
                  }
                >
                  {t.name[0].toUpperCase() + t.name.slice(1)}{' '}
                  <span className='ml-auto'>
                    {t.dark ? (
                      <MoonSVG className='w-5' />
                    ) : (
                      <SunSVG className='w-5' />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {children}
      </body>
    </html>
  )
}

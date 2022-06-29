import { Link } from '@remix-run/react'
import MainContent from './MainContent'

export default function ErrorPage({
  message,
  children,
}: {
  message?: string
  children?: React.ReactNode
}) {
  return (
    <>
      <MainContent>
        <div className='alert alert-warning shadow-xl flex-col my-8 py-8 max-w-xl m-auto'>
          <img
            src='/broken-heart.svg'
            alt='broken-heart'
            className='w-20 h-20'
          />{' '}
          <h1 className='text-center text-3xl'>Oops! Something went wrong.</h1>
          {message ? <h2 className='text-xl font-bold'>{message}</h2> : null}
          {children ? children : null}
          <Link to='/' className='btn shadow-xl'>
            Take Me To Safety
          </Link>
        </div>
      </MainContent>
    </>
  )
}

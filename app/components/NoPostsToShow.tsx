import { Link } from 'remix'

export default function NoPostsToShow({ category }: { category: string }) {
  return (
    <div className='alert alert-warning shadow-xl flex-col my-8 py-8 max-w-lg m-auto'>
      <h2 className='text-center text-xl'>
        <img src='/broken-heart.svg' alt='broken-heart' className='w-10 h-10' />{' '}
        Oops!
      </h2>
      <p>
        I haven't created any <strong>{category}</strong> posts as yet!
      </p>
      <p className='text-center'>Please try another category.</p>
      <Link to='/' className='btn shadow-xl'>
        Take Me Back
      </Link>
    </div>
  )
}

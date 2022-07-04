import { Link } from '@remix-run/react'
import type { Author, Category } from '~/graphql/graphcmsTypes'

export default function Footer({
  author,
  categories,
}: {
  author: Author
  categories: Category[]
}) {
  const year = new Date().getFullYear()
  return (
    <footer className='footer p-10 text-base-content bg-gradient-to-br from-base-300 to-base-100'>
      <div className='w-full h-full'>
        <Link to='/' className='avatar m-auto'>
          <div className='w-20 rounded-full ring ring-primary'>
            <img src={author.picture.url} alt={author.name} />
          </div>
        </Link>
        <p className='text-center w-full'>
          All content &copy; {author.name} {year}
        </p>
      </div>
      <div>
        <span className='footer-title'>Post Categories</span>
        {categories.map((category) => (
          <Link
            to={`/category/${category.slug}`}
            key={category.id}
            className='link link-hover'
          >
            {category.title}
          </Link>
        ))}
      </div>
      <div></div>
    </footer>
  )
}

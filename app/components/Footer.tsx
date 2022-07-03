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
    <footer className='footer p-10 bg-base-200 text-base-content'>
      <div className='w-full h-full'>
        <div className='avatar m-auto'>
          <div className='w-20 rounded-full ring ring-primary'>
            <img src={author.picture.url} alt={author.name} />
          </div>
        </div>
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

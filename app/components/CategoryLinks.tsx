import { Link } from '@remix-run/react'
import type { Category } from '~/graphql/graphcmsTypes'

export default function CategoryLinks({
  categories,
}: {
  categories: Category[]
}) {
  return (
    <ul className='flex flex-wrap'>
      {categories.map(({ id, title, slug }) => (
        <li key={id}>
          <Link key={id} to={`category/${slug}`}>
            <button className='btn btn-ghost'>{title}</button>
          </Link>
        </li>
      ))}
    </ul>
  )
}

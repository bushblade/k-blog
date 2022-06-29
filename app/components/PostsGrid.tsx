import { Link } from '@remix-run/react'
import type { Post } from '~/graphql/graphcmsTypes'

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <section className='grid justify-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5'>
      {posts.map((post) => (
        <div
          className='card bg-base-100 shadow-xl max-w-lg group'
          key={post.id}
        >
          <Link to={`/${post.slug}`}>
            <figure>
              <img
                src={post.coverImage.url}
                alt={post.title}
                className='group-hover:opacity-80 transition-opacity'
              />
            </figure>
          </Link>
          <div className='card-body justify-between'>
            <Link to={`/${post.slug}`} className=''>
              <h2 className='card-title group-hover:link decoration-2 decoration-primary'>
                {post.title}
              </h2>
              <p style={{ whiteSpace: 'pre-wrap' }} className='text-sm'>
                {trimText(post.content.text)}
              </p>
            </Link>
            <div className='card-actions justify-end'>
              {post.categories?.length > 0
                ? post.categories.map((category) => (
                  <Link
                    to={`/category/${category.slug}`}
                    className='hover:text-info-content'
                    key={category.id}
                  >
                    <div className='badge badge-outline hover:bg-info'>
                      {category.title}
                    </div>
                  </Link>
                ))
                : null}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

function trimText(text: string, length: number = 13) {
  const t = text
    .replace(/[0-9]\\n|\\n|\/\/|\n/gi, ' ')
    .replace(/\s+/g, ' ')
    .split(' ')
    .slice(0, length)
    .join(' ')
    .trim()
  return t
}

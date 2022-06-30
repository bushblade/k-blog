import { Link } from '@remix-run/react'
import { trimText } from '~/utils'
import Picture from '~/components/Picture'
import type { PostWithThumbnail } from '~/types'

export default function PostsGrid({ posts }: { posts: PostWithThumbnail[] }) {
  return (
    <section className='grid justify-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5'>
      {posts.map((post) => (
        <article
          className='card bg-base-100 shadow-xl max-w-lg group'
          key={post.id}
        >
          <Link to={`/${post.slug}`}>
            <figure className='overflow-hidden'>
              <Picture
                largeSrc={post.coverImage.url}
                smallSrc={post.coverImage.thumbnail}
                alt={post.title}
                className='group-hover:opacity-80 transition-opacity aspect-video'
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
                      className='badge badge-outline hover:bg-info hover:text-info-content'
                      key={category.id}
                    >
                      {category.title}
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

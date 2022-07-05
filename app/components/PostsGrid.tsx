import { Link } from '@remix-run/react'
import { formatDate, lessThanNdaysOld, trimText } from '~/utils'
import Picture from '~/components/Picture'
import type { PostWithThumbnail } from '~/types'

export default function PostsGrid({ posts }: { posts: PostWithThumbnail[] }) {
  return (
    <section className='grid justify-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5'>
      {posts.map((post) => (
        <div key={post.id} className='h-full relative group'>
          <div className='absolute bg-gradient-to-br from-primary via-accent to-secondary -z-0 w-[calc(100%+8px)] h-[calc(100%+8px)] top-[-4px] left-[-4px] card opacity-0 group-hover:opacity-100 transition-opacity'></div>
          <article className='card bg-base-100 shadow-xl max-w-lg group relative z-10 h-full'>
            <Link to={`/${post.slug}`}>
              <figure className='overflow-hidden group-hover:opacity-80 transition-opacity '>
                <Picture
                  largeSrc={post.coverImage.url}
                  smallSrc={post.coverImage.thumbnail}
                  alt={post.title}
                  className='aspect-video'
                />
              </figure>
            </Link>
            <div className='card-body justify-between'>
              <Link to={`/${post.slug}`} className=''>
                <span>
                  {formatDate(post.createdAt)}{' '}
                  {lessThanNdaysOld(post.createdAt, 14) ? (
                    <div className='badge badge-secondary -translate-y-3 -rotate-6'>
                      NEW
                    </div>
                  ) : null}
                </span>
                <h2 className='card-title group-hover:link decoration-2 decoration-primary my-3'>
                  {post.title}
                </h2>
                <p style={{ whiteSpace: 'pre-wrap' }} className='text-sm my-2'>
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
        </div>
      ))}
    </section>
  )
}

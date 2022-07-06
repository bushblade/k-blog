import { Link } from '@remix-run/react'
import { formatDate, lessThanNdaysOld, trimText } from '~/utils'
import Picture from '~/components/Picture'
import type { PostWithThumbnail } from '~/types'

export default function PostsGrid({ posts }: { posts: PostWithThumbnail[] }) {
  return (
    <section className='grid justify-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5'>
      {posts.map((post) => (
        <div key={post.id} className='h-full relative group'>
          <div className='absolute bg-gradient-to-br from-primary via-accent to-primary -z-0 w-[calc(100%+8px)] h-[calc(100%+8px)] top-[-4px] left-[-4px] card opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          <article className='card bg-base-100 shadow-lg max-w-lg group relative z-10 h-full'>
            <Link to={`/${post.slug}`}>
              <div className='overflow-hidden group-hover:opacity-80 transition-opacity '>
                <Picture
                  largeSrc={post.coverImage.url}
                  smallSrc={post.coverImage.thumbnail}
                  alt={post.title}
                  aspectRatio='16:9'
                />
              </div>
            </Link>
            <div className='card-body justify-between p-0'>
              <Link to={`/${post.slug}`} className='p-6'>
                <span>
                  {formatDate(post.createdAt)}{' '}
                  {lessThanNdaysOld(post.createdAt, 14) ? (
                    <div className='badge badge-secondary -translate-y-3 -rotate-6 group-hover:animate-pulse'>
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
              <div className='card-actions justify-end pb-6 pl-6 pr-6'>
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

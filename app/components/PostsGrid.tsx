import { Link } from 'remix'
import { Asset, Post } from '~/graphql/graphcmsTypes'
import Picture from './Picture'

interface WithThumbnail extends Asset {
  thumbnail: string
}

interface PostWithThumbnail extends Post {
  coverImage: WithThumbnail
}

export default function PostsGrid({ posts }: { posts: PostWithThumbnail[] }) {
  return (
    <section className='grid justify-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5'>
      {posts.map((post) => (
        <Link
          to={post.slug}
          className='card bg-base-100 shadow-xl max-w-lg hover:scale-105 transition-transform'
          key={post.id}
        >
          <figure>
            {
              // <img src={post.coverImage.url} alt={post.title} />
            }
            <Picture
              smallSrc={post.coverImage.thumbnail}
              largeSrc={post.coverImage.url}
              alt={post.title}
            />
          </figure>
          <div className='card-body justify-between'>
            <h2 className='card-title'>
              {post.title}
              {
                // <div className='badge badge-secondary'>NEW</div>
              }
            </h2>
            {
              // <p>If a dog chews shoes whose shoes does he choose?</p>
            }
            <div className='card-actions justify-end'>
              {post.categories?.length > 0
                ? post.categories.map((category) => (
                    <div className='badge badge-outline' key={category.id}>
                      {category.title}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}

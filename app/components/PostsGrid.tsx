import { Link } from 'remix'
import { Post } from '~/graphql/graphcmsTypes'

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <section className='grid justify-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5'>
      {posts.map((post) => (
        <div
          className='card bg-base-100 shadow-xl max-w-lg hover:scale-105 transition-transform'
          key={post.id}
        >
          <Link key={post.id} to={`posts/${post.slug}`}>
            <figure>
              <img src={post.coverImage.url} alt={post.title} />
            </figure>
            <div className='card-body'>
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
                {post.categories.length > 0
                  ? post.categories.map((category) => (
                      <div
                        className='badge badge-secondary badge-outline'
                        key={category.id}
                      >
                        {category.title}
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
}

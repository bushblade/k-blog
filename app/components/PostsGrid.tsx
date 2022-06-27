import { Link } from 'remix'
import { Post } from '~/graphql/graphcmsTypes'

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <section className='grid justify-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5'>
      {posts.map((post) => (
        <Link
          to={`/${post.slug}`}
          className='card bg-base-100 shadow-xl max-w-lg hover:scale-105 transition-transform'
          key={post.id}
        >
          <figure>
            <img src={post.coverImage.url} alt={post.title} />
          </figure>
          <div className='card-body justify-between'>
            <h2 className='card-title'>
              {post.title}
              {
                // <div className='badge badge-secondary'>NEW</div>
              }
            </h2>
            <p
              style={{ whiteSpace: 'pre-wrap' }}
              className='text-sm text-neutral'
            >
              {trimText(post.content.text)}
            </p>
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

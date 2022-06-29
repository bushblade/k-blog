import type { Author } from '~/graphql/graphcmsTypes'
import Header from './Header'

// function randomGreeting() {
//   const greetings = ['Hey there!', 'Hi!', "Yep that's me!"]
//   return greetings[Math.floor(Math.random() * greetings.length + 1)]
// }

export default function Banner({ author }: { author: Author }) {
  return (
    <Header>
      <div className='max-w-md'>
        <div
          className='avatar tooltip tooltip-left tooltip-primary'
          data-tip="Yep that's me!"
        >
          <div className='w-28 rounded-full ring ring-primary'>
            <img src={author.picture?.url} alt={author.name} />
          </div>
        </div>
        <h1 className='text-5xl'>Hi I&apos;m {author.name}</h1>
        <p className='pt-6 font-bold'>A {author.title}</p>
        <p className='pb-6'>Welcome to my website</p>
      </div>
    </Header>
  )
}

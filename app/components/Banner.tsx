import { Author } from '~/graphql/graphcmsTypes'

function randomGreeting() {
  const greetings = ['Hey there!', 'Hi!', "Yep that's me!"]
  return greetings[Math.floor(Math.random() * greetings.length + 1)]
}

export default function Banner({ author }: { author: Author }) {
  return (
    <header className='hero bg-base-200 py-8'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <div
            className='avatar tooltip tooltip-left tooltip-primary'
            data-tip="Yep that's me!"
          >
            <div className='w-28 rounded-full ring ring-primary'>
              <img src={author.picture?.url} alt={author.name} />
            </div>
          </div>
          <h1 className='text-5xl'>Hi I'm {author.name}</h1>
          <p className='pt-6 font-bold'>A {author.title}</p>
          <p className='pb-6'>Welcome to my website</p>
        </div>
      </div>
    </header>
  )
}

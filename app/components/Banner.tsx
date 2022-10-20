import { useState } from 'react'
import type { Author } from '~/graphql/graphcmsTypes'
import Header from './Header'

const greetings = ['Hey there!', 'Hi!', `Yep that's me!`, 'Hello!', '...']

function randomGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)]
}

export default function Banner({ author }: { author: Author }) {
  const [greeting, setGreeting] = useState(greetings[0])
  return (
    <Header>
      <div className='max-w-md'>
        <div
          className='avatar tooltip tooltip-left tooltip-primary'
          data-tip={greeting}
          onMouseLeave={() => {
            const timeoutId = setTimeout(() => {
              setGreeting(randomGreeting())
              clearTimeout(timeoutId)
            }, 300)
          }}
        >
          <div className='w-28 rounded-full ring ring-primary'>
            <img src={author.picture?.url} alt={author.name} />
          </div>
        </div>
        <h1 className='text-5xl'>Hi I&apos;m {author.name}</h1>
        <p className='pt-6 font-bold'>A {author.title}</p>
        <p className='pb-6'>{author.biography}</p>
      </div>
    </Header>
  )
}

const iconfile = {
  minecraft: 'video-game',
  blender: 'blender',
  story: 'book-open',
  animation: 'film-camera',
  youtube: 'youtube',
  coding: 'hacker-cat',
}

interface FileName {
  minecraft: 'pickaxe'
  blender: 'blender-logo'
  story: 'book-vol-2'
  animation: 'film-camera'
  youtube: 'youtube'
  coding: 'hacker-cat'
}

// TODO: add icons to schema

export default function CategoryIcon({ category }: { category: string }) {
  const file = category.toLowerCase() as keyof FileName
  if (!iconfile[file]) {
    return null
  }
  return (
    <img src={`/${iconfile[file]}.svg`} alt='' className='h-24 inline-block' />
  )
}

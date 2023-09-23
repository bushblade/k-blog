import StackedWave from './StackedWave'
export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className='hero py-8 bg-gradient-to-tl from-base-300 to-base-200 relative min-h-[386px]'>
      <StackedWave />
      <div className='text-center hero-content flex content-center align-center'>
        {children}
      </div>
    </header>
  )
}

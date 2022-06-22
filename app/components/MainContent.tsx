/**
 * Wraps the main content of the site in a container
 */
export default function MainContent({
  children,
  narrow = false,
}: {
  children: React.ReactNode
  narrow?: boolean
}) {
  return (
    <div className='flex justify-center'>
      <main
        className={`container p-3 ${
          narrow ? 'max-w-4xl' : 'lg:max-w-screen-lg'
        }`}
      >
        {children}
      </main>
    </div>
  )
}

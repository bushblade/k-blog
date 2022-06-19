/**
 * Wraps the main content of the site in a container
 */
export default function MainContent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex justify-center'>
      <main className='container lg:max-w-screen-lg p-3'>{children}</main>
    </div>
  )
}

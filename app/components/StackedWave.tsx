export default function StackedWave() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={1920}
      height={400}
      preserveAspectRatio='none'
      className='absolute overflow-hidden bottom-0 opacity-40'
    >
      <path
        d='M0 313C128 263.2 384 69 640 64s384 230.2 640 224c256-6.2 512-204 640-255v367H0z'
        className='fill-accent-focus'
      />
      <path
        d='M0 78c55 48.4 165 254 275 242S440 34.2 550 18C660 1.8 715 219.4 825 239c110 19.6 165-129.8 275-123 110 6.8 165 156 275 157s166-154.4 275-152c109 2.4 216 131.2 270 164v115H0z'
        className='fill-secondary-focus'
      />
      <path
        d='M0 378c128-52.2 384-238.4 640-261 256-22.6 384 140.8 640 148 256 7.2 512-89.6 640-112v247H0z'
        className='fill-primary-focus'
      />
      <path
        d='M0 89c96 50 288 248.4 480 250 192 1.6 288-219.2 480-242 192-22.8 288 124 480 128s384-86.4 480-108v283H0z'
        className='fill-secondary'
      />
    </svg>
  )
}

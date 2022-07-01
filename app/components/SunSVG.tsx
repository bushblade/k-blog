export default function SunSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 72 72'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill='#FCEA2B'
        d='m66 36-10.676 5.182 6.658 9.824-11.84-.864.864 11.84-9.825-6.658L36 66l-5.182-10.676-9.824 6.658.864-11.84-11.84.864 6.658-9.825L6 36l10.677-5.182-6.659-9.824 11.84.864-.864-11.84 9.825 6.658L36 6l5.182 10.677 9.824-6.659-.864 11.84 11.84-.864-6.658 9.825z'
      />
      <g
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <circle cx={36} cy={35.95} r={19.828} />
        <path d='m66 36-10.676 5.182 6.658 9.824-11.84-.864.864 11.84-9.825-6.658L36 66l-5.182-10.676-9.824 6.658.864-11.84-11.84.864 6.658-9.825L6 36l10.677-5.182-6.659-9.824 11.84.864-.864-11.84 9.825 6.658L36 6l5.182 10.677 9.824-6.659-.864 11.84 11.84-.864-6.658 9.825z' />
      </g>
    </svg>
  )
}
import { Link } from 'remix'

export default function BackArrow() {
  return (
    <div className='fixed top-4 left-4'>
      <Link to='/'>
        <button className='btn btn-ghost hover:scale-105 transition-transform'>
          <svg
            height='40px'
            width='40px'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='stroke-current'
          >
            <line x1='19' y1='12' x2='5' y2='12'></line>
            <polyline points='12 19 5 12 12 5'></polyline>
          </svg>
        </button>
      </Link>
    </div>
  )
}

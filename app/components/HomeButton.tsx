import { Link } from '@remix-run/react'

/* function Arrow() {
  return (
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
  )
} */

function HomeIcon() {
  return (
    <svg
      id='home'
      viewBox='0 0 72 72'
      xmlns='http://www.w3.org/2000/svg'
      height='40px'
      width='40px'
    >
      <g id='color'>
        <polygon
          fill='#D0CFCE'
          stroke='none'
          points='17.1289,59.7384 16.0605,34.7399 16.0812,27.7956 36.1491,8.1103 55.9811,27.9203 55.9766,43.3584 55.0371,52.0185 54.9219,59.7384 41.7865,59.1623 41.8149,41.6273 30.2251,41.6273 30.149,59.1623'
        />
      </g>
      <g id='hair' />
      <g id='skin' />
      <g id='skin-shadow' />
      <g id='line'>
        <path
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M41.9901,59.9508H53.982c0.55,0,1-0.45,1-1v-24.938'
        />
        <path
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M17.058,34.0128v24.938c0,0.55,0.45,1,1,1h12.1346'
        />
        <polyline
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='2'
          points='8.4925,35.5947 36.0155,7.9766 63.5958,35.3474'
        />
        <polyline
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='2'
          points='41.8149,59.9327 41.8149,41.6273 30.2251,41.6273 30.2251,59.9327'
        />
      </g>
    </svg>
  )
}

export default function HomeButton() {
  return (
    <div
      className='fixed top-4 left-4 z-30 tooltip tooltip-right tooltip-primary'
      data-tip='Home'
    >
      <Link to='/'>
        <button
          className='btn btn-ghost hover:scale-105 transition-transform'
          name='home'
        >
          <HomeIcon />
        </button>
      </Link>
    </div>
  )
}

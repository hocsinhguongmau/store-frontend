import Link from 'next/link'
import React from 'react'

type StarProps = {
  rating: number
}

const Star = ({ rating }: StarProps) => (
  <span className='star inline-block bg-repeat-x bg-left-top'>
    <span
      className='rating inline-block bg-repeat-x bg-left-top'
      style={{ width: rating * 12 + 'px' }}></span>
  </span>
)

const LeftNav = () => {
  return (
    <div>
      <h3 className='font-bold'>Scents</h3>
      <ul>
        <li>
          <Link href=''>
            <a>Women's fragrances</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>Men's fragrances</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>Unisex's fragrances</a>
          </Link>
        </li>
      </ul>
      <h3 className='font-bold'>Price range</h3>
      <div>
        <input type='number' placeholder='0&euro;' /> until
        <input type='number' placeholder='100&euro;' />
      </div>
      <h3 className='font-bold'>Brand</h3>
      <input type='text' placeholder='Start writing to filter brands' />
      <div className='max-h-72 overflow-auto'>
        <ul>
          <li className='text-xs mt-4'>
            <Link href=''>
              <a>
                Chanel <span className='text-gray-500'>124</span>
              </a>
            </Link>
          </li>
          <li className='text-xs mt-4'>
            <Link href=''>
              <a>
                Chanel <span className='text-gray-500'>124</span>
              </a>
            </Link>
          </li>
          <li className='text-xs mt-4'>
            <Link href=''>
              <a>
                Chanel <span className='text-gray-500'>124</span>
              </a>
            </Link>
          </li>
          <li className='text-xs mt-4'>
            <Link href=''>
              <a>
                Chanel <span className='text-gray-500'>124</span>
              </a>
            </Link>
          </li>
          <li className='text-xs mt-4'>
            <Link href=''>
              <a>
                Chanel <span className='text-gray-500'>124</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <h3 className='font-bold'>Reviews</h3>
      <ul>
        <li className='mt-2 text-xs'>
          <input type='checkbox' id='rating-5' />
          <label htmlFor='rating-5'>
            <Star rating={5} />
            <span className='text-gray-500'>124</span>
          </label>
        </li>
        <li className='mt-2 text-xs'>
          <input type='checkbox' id='rating-4' />
          <label htmlFor='rating-4'>
            <Star rating={4} />
            <span className='text-gray-500'>124</span>
          </label>
        </li>
        <li className='mt-2 text-xs'>
          <input type='checkbox' id='rating-3' />
          <label htmlFor='rating-3'>
            <Star rating={3} />
            <span className='text-gray-500'>124</span>
          </label>
        </li>
        <li className='mt-2 text-xs'>
          <input type='checkbox' id='rating-2' />
          <label htmlFor='rating-2'>
            <Star rating={2} />
            <span className='text-gray-500'>124</span>
          </label>
        </li>
        <li className='mt-2 text-xs'>
          <input type='checkbox' id='rating-1' />
          <label htmlFor='rating-1'>
            <Star rating={1} />
            <span className='text-gray-500'>124</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default LeftNav

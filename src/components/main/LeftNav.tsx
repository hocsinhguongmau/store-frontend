import Link from 'next/link'
import React, { useState } from 'react'
import Star from './Star'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const LeftNav = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button className='flex mb-6' onClick={() => setShow(!show)}>
        Filter
        {show ? (
          <RiArrowUpSLine className='mt-0.5 ml-2 text-xl' />
        ) : (
          <RiArrowDownSLine className='mt-0.5 ml-2 text-xl' />
        )}
      </button>
      <div
        className={`left-nav lg:pr-8 transition-all duration-300 overflow-hidden mb-6 ${
          show ? 'h-auto' : 'h-0 '
        }`}>
        <h3 className='font-bold text-lg pb-2 '>Scents</h3>
        <ul>
          <li className='mt-1'>
            <Link href=''>
              <a>Women's fragrances</a>
            </Link>
          </li>
          <li className='mt-1'>
            <Link href=''>
              <a>Men's fragrances</a>
            </Link>
          </li>
          <li className='mt-1'>
            <Link href=''>
              <a>Unisex's fragrances</a>
            </Link>
          </li>
        </ul>
        <h3 className='font-bold text-lg pb-2 mt-2'>Price</h3>
        <div className='flex leading-8 text-sm text-gray-400'>
          <label
            htmlFor='min-price'
            className='flex border-2 border-solid border-gray-300 rounded-sm  px-2'>
            <input
              type='number'
              id='min-price'
              className='w-14 text-right border-none outline-none text-sm'
              placeholder='0'
            />
            <span>&euro;</span>
          </label>
          <span className='px-4 text-gray-800'>to</span>
          <label
            htmlFor='max-price'
            className='flex border-2 border-solid border-gray-300 rounded-sm px-2'>
            <input
              type='number'
              id='max-price'
              className='w-14 text-right border-none outline-none text-sm'
              placeholder='100'
            />
            <span>&euro;</span>
          </label>
        </div>
        <h3 className='font-bold text-lg pb-2 mt-2'>Brand</h3>
        <input
          type='text'
          className='text-sm border-2 border-solid border-gray-300 w-full p-2'
          placeholder='Filter brands'
        />
        <div className='max-h-72 overflow-auto mt-4'>
          <ul>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
            <li className='text-xs mb-4'>
              <Link href=''>
                <a>
                  Chanel <span className='text-gray-500'>124</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <h3 className='font-bold text-lg pb-2 mt-2'>Reviews</h3>
        <ul>
          <li className='mt-2 text-xs'>
            <input type='checkbox' id='rating-5' className='w-4 h-4 mr-2' />
            <label htmlFor='rating-5' className=''>
              <Star rating={5} />
              <span className='text-gray-500 align-top leading-5 inline-block ml-2'>
                124
              </span>
            </label>
          </li>
          <li className='mt-2 text-xs'>
            <input type='checkbox' id='rating-5' className='w-4 h-4 mr-2' />
            <label htmlFor='rating-5' className=''>
              <Star rating={4} />
              <span className='text-gray-500 align-top leading-5 inline-block ml-2'>
                124
              </span>
            </label>
          </li>
          <li className='mt-2 text-xs'>
            <input type='checkbox' id='rating-5' className='w-4 h-4 mr-2' />
            <label htmlFor='rating-5' className=''>
              <Star rating={3} />
              <span className='text-gray-500 align-top leading-5 inline-block ml-2'>
                124
              </span>
            </label>
          </li>
          <li className='mt-2 text-xs'>
            <input type='checkbox' id='rating-5' className='w-4 h-4 mr-2' />
            <label htmlFor='rating-5' className=''>
              <Star rating={2} />
              <span className='text-gray-500 align-top leading-5 inline-block ml-2'>
                124
              </span>
            </label>
          </li>
          <li className='mt-2 text-xs'>
            <input type='checkbox' id='rating-5' className='w-4 h-4 mr-2' />
            <label htmlFor='rating-5' className=''>
              <Star rating={1} />
              <span className='text-gray-500 align-top leading-5 inline-block ml-2'>
                124
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LeftNav

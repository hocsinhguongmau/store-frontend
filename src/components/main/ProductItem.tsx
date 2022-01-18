import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import StarRatings from 'react-star-ratings'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Star from './Star'

const ProductItem = ({ button = false }) => {
  return (
    <div className='product-item mt-4'>
      <div className='text-center relative'>
        <button className='absolute top-0 right-0 z-10 product-item__button'>
          <AiOutlineHeart className='hover:text-red-500' />
          <AiFillHeart className='text-red-500 hidden' />
        </button>
        <Link href='/'>
          <a>
            <Image src='/images/item.jpeg' height={160} width={89} />
          </a>
        </Link>
      </div>
      <div className='text-center'>
        <span className='bg-red-500 uppercase px-2 text-white inline-block text-sm'>
          Sale
        </span>
      </div>
      <div className='text-center leading-6'>
        <h3 className='mt-2'>
          <Link href='/'>
            <a>Montblanc</a>
          </Link>
        </h3>
        <h3 className='font-bold mt-1'>
          <Link href='/'>
            <a>Explorer</a>
          </Link>
        </h3>
        <p className='text-xs mt-1 mb-2'>Eau de Parfum for Men</p>
        <Star rating={3} />
        <p className='font-bold mt-2'>44.10&euro;</p>
        {button ? <button className='button mt-4'>Add to cart</button> : null}
      </div>
    </div>
  )
}

export default ProductItem

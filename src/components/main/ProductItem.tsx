import React from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import Link from 'next/link'
import StarRatings from 'react-star-ratings'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Star from './Star'
import { client } from '@src/lib/client'

type ProductItemType = {
  button?: boolean
  product: ProductType
}

const ProductItem = ({ button = false, product }: ProductItemType) => {
  const imageProps = useNextSanityImage(client, product.images)

  return (
    <div className='product-item mt-4'>
      <div className='text-center relative'>
        <button className='absolute top-0 right-0 z-10 product-item__button'>
          <AiOutlineHeart className='hover:text-red-500' />
          <AiFillHeart className='text-red-500 hidden' />
        </button>
        <Link href={`/${product.vendor.slug}/${product.slug}`}>
          <a>
            <Image
              {...imageProps}
              height={160}
              width={89}
              alt={product.title}
            />
          </a>
        </Link>
      </div>
      {product.discount === true ? (
        <div className='text-center'>
          <span className='bg-red-500 uppercase px-2 text-white inline-block text-sm'>
            Sale
          </span>
        </div>
      ) : null}

      <div className='text-center leading-6'>
        <h3 className='mt-2'>
          <Link href={`/${product.vendor.slug}/${product.slug}`}>
            <a>{product.title}</a>
          </Link>
        </h3>
        <h3 className='font-bold mt-1'>
          <Link href={`/${product.vendor.slug}`}>
            <a>{product.vendor.title}</a>
          </Link>
        </h3>
        <p className='text-xs mt-1 mb-2'>{product.blurb.en}</p>
        <Star rating={3} />
        <p className='font-bold mt-2'>44.10&euro;</p>
        {button ? <button className='button mt-4'>Add to cart</button> : null}
      </div>
    </div>
  )
}

export default ProductItem

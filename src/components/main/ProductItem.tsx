import React, { useEffect, useState } from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Star from './Star'
import { client } from '@src/lib/client'
import { Auth, Hub } from 'aws-amplify'
import useFavoriteStore from '@src/lib/store/favoriteStore'

type ProductItemType = {
  button?: boolean
  product: ProductType
}

const ProductItem = ({ button = false, product }: ProductItemType) => {
  const [favorite, setFavorite] = useState(false)
  const { favoriteItems, initialItems, setFavoriteItems, removeFavoriteItems } =
    useFavoriteStore()
  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const user = await Auth.currentAuthenticatedUser()

  //       initialItems(user.attributes['custom:favorite_items'])
  //       console.log(favoriteItems)
  //       if (favoriteItems.includes(product.id)) {
  //         setFavorite(true)
  //       } else {
  //         setFavorite(false)
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getUser()
  // }, [])

  // useEffect(() => {
  //   let updateFavorite = async () => {
  //     try {
  //       let user = await Auth.currentAuthenticatedUser()
  //       await Auth.updateUserAttributes(user, {
  //         'custom:favorite_items': favoriteItems.join(','),
  //       })
  //     } catch {}
  //   }
  //   Hub.listen('auth', updateFavorite)
  //   updateFavorite()
  //   return () => Hub.remove('auth', updateFavorite)
  // }, [])

  const imageProps = useNextSanityImage(client, product.images)
  let rating: number = 0
  let total: number = 0
  let count: number = 0
  product.comments.map((comment) => {
    if (comment.rating) {
      total += comment.rating
      count++
    }
  })
  rating = total / count
  const { locale } = useRouter()
  const handleFavoriteToggle = () => {
    setFavorite(!favorite)
    if (!favorite) {
      if (!favoriteItems.includes(product.id)) {
        setFavoriteItems(product.id, favoriteItems)
      }
    } else {
      removeFavoriteItems(product.id, favoriteItems)
    }
  }
  if (locale == 'en' || locale == 'fi' || locale == 'se') {
    return (
      <div className='product-item mt-4 lg:px-8 '>
        <div className='text-center relative'>
          {/* <button
            onClick={handleFavoriteToggle}
            className={`absolute top-0 right-0 z-10 ${
              favorite ? 'text-red-500' : 'text-black'
            }`}>
            {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </button> */}
          {product.sales === true ? (
            <div className='text-center absolute top-0 left-0 z-10'>
              <span
                className='bg-red-500  px-4 py-1 text-white inline-block text-xs lg:text-xs'
                style={{ borderRadius: '0 999px 0 999px' }}>
                Sale
              </span>
            </div>
          ) : null}
          <Link href={`/${product.vendor.slug}/${product.slug}`}>
            <a>
              <Image
                {...imageProps}
                layout='intrinsic'
                height={140}
                width={80}
                alt={product.title}
              />
            </a>
          </Link>
        </div>

        <div className='text-center leading-6'>
          <h3 className='mt-2'>
            <Link href={`/${product.vendor.slug}/${product.slug}`}>
              <a>{product.title}</a>
            </Link>
          </h3>
          <h3 className='font-bold mt-1'>
            <Link href={`/shop?brand=${product.vendor.slug}`}>
              <a>{product.vendor.title}</a>
            </Link>
          </h3>
          <p className='text-xs mt-1 mb-2'>{product.blurb[locale]}</p>
          <Star rating={rating} />
          <p className='font-bold mt-2'>
            {product.discount > 0
              ? product.priceDiscount.toFixed(0)
              : product.price}
            &euro;
          </p>

          {button ? <button className='button mt-4'>Add to cart</button> : null}
        </div>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ProductItem

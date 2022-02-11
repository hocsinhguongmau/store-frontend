import { client } from '@src/lib/client'
import { productPageContent } from '@src/lib/locale/product'
import useLanguageStore from '@src/lib/store/languageStore'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useShoppingCart } from 'use-shopping-cart/react'

type ImagesType = {
  imageData: string
  name: string
}

const Images = ({ imageData, name }: ImagesType) => {
  const imageProps = useNextSanityImage(client, imageData)
  return <Image {...imageProps} width={50} height={100} alt={name} />
}

const CartProduct = () => {
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart()
  const language = useLanguageStore((state) => state.language)
  const products = []
  for (const sku in cartDetails) {
    const product = cartDetails[sku]
    const options = []
    for (let quantity = 1; quantity <= 10; ++quantity)
      options.push(
        <option key={quantity} value={quantity}>
          {quantity}
        </option>,
      )

    products.push(
      <div
        key={product.id}
        className='flex flex-row w-full justify-between border-b border-solid border-gray-300 py-8'>
        <div className='flex flex-row'>
          <Link href={product.href}>
            <a>
              <Images imageData={product.image} name={product.name} />
            </a>
          </Link>
          <div className='ml-10 text-sm leading-6 -mt-1'>
            <p className='font-bold'>
              <Link href={product.href}>
                <a>{product.name} </a>
              </Link>
            </p>
            <p>
              {productPageContent[language].size}: {product.size}ml
            </p>
            <p>
              {productPageContent[language].price}: {product.price}
            </p>
            <p>
              {productPageContent[language].quantity}: {product.quantity}
            </p>
          </div>
        </div>
        <div className='flex flex-row'>
          <select
            className='ml-10 text-sm outline-none inline-block w-10'
            id='quantity-select'
            defaultValue={product.quantity}
            onChange={(event) => {
              setItemQuantity(sku, parseInt(event.target.value))
            }}>
            {options}
          </select>
          <div className='ml-10 text-sm leading-6 self-center'>
            <span className='font-bold'>Total:</span>{' '}
            {product.price * product.quantity}&euro;
          </div>
          <button
            onClick={() => removeItem(sku)}
            className='ml-10 text-red-500 text-lg'>
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>,
    )
  }
  return <div>{products.length ? products : null}</div>
}

export default CartProduct

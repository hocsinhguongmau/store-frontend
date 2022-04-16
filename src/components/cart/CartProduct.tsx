import { client } from '@src/lib/client'
import { productPageContent } from '@src/lib/locale/product'
import useLanguageStore from '@src/lib/store/languageStore'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useCart } from 'react-use-cart'
import { RiDeleteBin6Line } from 'react-icons/ri'

type ImagesType = {
  imageData: string
  name: string
}

const Images = ({ imageData, name }: ImagesType) => {
  const imageProps = useNextSanityImage(client, imageData)
  return <Image {...imageProps} width={50} height={100} alt={name} />
}

const CartProduct = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart()
  const language = useLanguageStore((state) => state.language)

  const options: any[] = []
  for (let quantity = 1; quantity <= 10; ++quantity)
    options.push(
      <option key={quantity} value={quantity}>
        {quantity}
      </option>,
    )
  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className='flex flex-row w-full justify-between border-b border-solid border-gray-300 py-8 cart-item'>
            <div className='flex flex-row'>
              <Link href={item.href}>
                <a>
                  <Images imageData={item.image} name={item.name} />
                </a>
              </Link>
              <div className='ml-10 text-sm leading-6 -mt-1'>
                <p className='font-bold'>
                  <Link href={item.href}>
                    <a>{item.name} </a>
                  </Link>
                </p>
                <p>
                  {productPageContent[language].size}: {item.size}ml
                </p>
                <p>
                  {productPageContent[language].price}: {item.price}
                </p>
                <p>
                  {productPageContent[language].quantity}: {item.quantity}
                </p>
              </div>
            </div>
            <div className='flex flex-row'>
              <select
                className='ml-10 text-sm outline-none inline-block w-10'
                id='quantity-select'
                defaultValue={item.quantity}
                onChange={(event) => {
                  updateItemQuantity(item.id, parseInt(event.target.value))
                }}>
                {options}
              </select>
              <div className='ml-10 text-sm leading-6 self-center'>
                <span className='font-bold'>Total:</span>{' '}
                {item.price * item.quantity!}&euro;
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className='ml-10 text-red-500 text-lg'>
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No items</div>
      )}
    </div>
  )
}

export default CartProduct

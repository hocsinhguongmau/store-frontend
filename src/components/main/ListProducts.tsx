import React from 'react'
import ProductItem from './ProductItem'

type Props = {
  title: string
}

const ListProducts = ({ title }: Props) => {
  return (
    <div className='container'>
      <h2 className='text-3xl text-center mt-10 pb-10'>{title}</h2>
      <div className='grid grid-cols-4 gap-10'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className='text-center'>
        <button className='bg-red-500 text-white uppercase px-4 py-2 mt-10'>
          View more
        </button>
      </div>
    </div>
  )
}

export default ListProducts

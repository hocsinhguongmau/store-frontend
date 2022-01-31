import { useRouter } from 'next/router'
import React, { useState } from 'react'

const FilterByPrice = () => {
  const router = useRouter()
  const [priceMin, setPriceMin] = useState<string>(
    router.query.price ? router.query.price[0] : '0',
  )
  const [priceMax, setPriceMax] = useState<string>(
    router.query.price ? router.query.price[1] : '0',
  )

  const handlePriceRouter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push({
      pathname: router.pathname,
      query: { ...router.query, price: [priceMin, priceMax] },
    })
  }
  return (
    <>
      <h3 className='font-bold text-lg pb-2 mt-2'>Price</h3>
      <form
        onSubmit={handlePriceRouter}
        className='flex leading-8 text-sm text-gray-400'>
        <label
          htmlFor='min-price'
          className='flex border-2 border-solid border-gray-300 rounded-sm  px-2'>
          <input
            type='number'
            id='min-price'
            className='w-14 text-right border-none outline-none text-sm'
            placeholder='0'
            value={priceMin}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPriceMin(e.target.value)
            }
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
            placeholder='200'
            value={priceMax}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPriceMax(e.target.value)
            }
          />
          <span>&euro;</span>
          <button type='submit'></button>
        </label>
      </form>
    </>
  )
}

export default FilterByPrice

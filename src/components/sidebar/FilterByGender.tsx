import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  gender: boolean
}

const FilterByGender = ({ gender }: Props) => {
  const router = useRouter()
  const handleGenderRouter = (gender: string) => {
    router.push({
      pathname: '/shop',
      query: { ...router.query, gender: gender },
    })
  }
  return (
    <>
      <h3 className='font-bold text-lg pb-2 '>Gender</h3>
      {!gender ? (
        <ul>
          <li
            className='mt-1 cursor-pointer hover:text-gray-500'
            onClick={() => handleGenderRouter('women')}>
            Women's fragrances
          </li>
          <li
            className='mt-1 cursor-pointer hover:text-gray-500'
            onClick={() => handleGenderRouter('men')}>
            Men's fragrances
          </li>
          <li
            className='mt-1 cursor-pointer hover:text-gray-500'
            onClick={() => handleGenderRouter('unisex')}>
            Unisex's fragrances
          </li>
        </ul>
      ) : (
        <p
          className='cursor-pointer text-sm text-gray-500 inline-block'
          onClick={() => handleGenderRouter('')}>
          {router.query.gender}{' '}
          <span className='text-xl text-red-500 inline-block align-middle -mt-1'>
            x
          </span>
        </p>
      )}
    </>
  )
}

export default FilterByGender

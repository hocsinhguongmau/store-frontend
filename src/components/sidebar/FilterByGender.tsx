import { productPageContent } from '@src/lib/locale/product'
import useLanguageStore from '@src/lib/store/languageStore'
import { useRouter } from 'next/router'
import React from 'react'

const FilterByGender = () => {
  const router = useRouter()
  const language = useLanguageStore((state) => state.language)
  const showGender = router.query.gender
  const handleGenderRouter = (gender: string) => {
    let path = router.pathname

    let hmm = { ...router.query, gender: gender, page_slug: '1' }
    router.push(
      {
        pathname: path,
        query: hmm,
      },
      undefined,
      { shallow: true },
    )
  }
  return (
    <>
      <h3 className='font-bold text-lg pb-2 '>
        {productPageContent[language].gender}
      </h3>
      {!showGender ? (
        <ul>
          <li
            className='mt-1 cursor-pointer hover:text-gray-500'
            onClick={() => handleGenderRouter('women')}>
            {productPageContent[language].womenFragrance}
          </li>
          <li
            className='mt-1 cursor-pointer hover:text-gray-500'
            onClick={() => handleGenderRouter('men')}>
            {productPageContent[language].menFragrance}
          </li>
          <li
            className='mt-1 cursor-pointer hover:text-gray-500'
            onClick={() => handleGenderRouter('unisex')}>
            {productPageContent[language].unisexFragrance}
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

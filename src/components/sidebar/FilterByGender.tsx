import { productPageContent } from '@src/lib/locale/product'
import useLanguageStore from '@src/lib/store/languageStore'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type GenderType = 'womenFragrance' | 'menFragrance' | 'unisexFragrance'

const FilterByGender = () => {
  const router = useRouter()
  const language = useLanguageStore((state) => state.language)
  const showGender = router.query.gender
  const [gender, setGender] = useState<GenderType>('womenFragrance')
  const handleGenderRouter = (gender: string) => {
    let path = router.pathname
    if (gender === 'women' || gender === 'men' || gender === 'unisex') {
      switch (gender) {
        case 'women':
          setGender('womenFragrance')
          break
        case 'men':
          setGender('menFragrance')
          break
        case 'unisex':
          setGender('unisexFragrance')
          break
      }
    }
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
        <ul className='gender'>
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
          {productPageContent[language][gender]}{' '}
          <span className='text-xl text-red-500 inline-block align-middle -mt-1 remove-filter'>
            <AiOutlineClose />
          </span>
        </p>
      )}
    </>
  )
}

export default FilterByGender

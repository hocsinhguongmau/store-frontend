import { productPageContent } from '@src/lib/locale/product'
import useLanguageStore from '@src/lib/store/languageStore'
import React from 'react'

const Services = () => {
  const language = useLanguageStore((state) => state.language)
  return (
    <div className='container grid grid-cols-1 md:grid-cols-3 gap-0 uppercase mt-12 text-center'>
      <div className='py-6 border-b border-gray-500 md:border-b-0'>
        <h3 className='font-bold text-sm'>
          {productPageContent[language].free}
        </h3>
        <p className='text-xs mt-2'>{productPageContent[language].delivery}</p>
      </div>
      <div className='py-6 border-b md:border-l border-gray-500 md:border-b-0'>
        <h3 className='font-bold text-sm'>
          {productPageContent[language].sample}
        </h3>
        <p className='text-xs mt-2'>{productPageContent[language].offer}</p>
      </div>
      <div className='py-6 md:border-l border-gray-500 '>
        <h3 className='font-bold text-sm'>
          {productPageContent[language].free}
        </h3>
        <p className='text-xs mt-2'>{productPageContent[language].gift}</p>
      </div>
    </div>
  )
}

export default Services

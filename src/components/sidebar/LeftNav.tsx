import React, { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import FilterByBrand from './FilterByBrand'
import FilterByGender from './FilterByGender'
import FilterByPrice from './FilterByPrice'
import FilterByDiscount from './FilterByDiscount'
import useLanguageStore from '@src/lib/store/languageStore'
import { productPageContent } from '@src/lib/locale/product'

const LeftNav = () => {
  const [show, setShow] = useState(false)
  const language = useLanguageStore((state) => state.language)
  return (
    <div className='left-nav'>
      <button className='flex mb-6 lg:hidden' onClick={() => setShow(!show)}>
        {productPageContent[language].filter}
        {show ? (
          <RiArrowUpSLine className='mt-0.5 ml-2 text-xl' />
        ) : (
          <RiArrowDownSLine className='mt-0.5 ml-2 text-xl' />
        )}
      </button>
      <div
        className={`left-nav lg:pr-8 transition-all duration-300 lg:h-auto overflow-hidden mb-6 ${
          show ? 'h-auto' : 'h-0'
        }`}>
        <FilterByGender />
        <FilterByPrice />
        <FilterByBrand />
        <FilterByDiscount />
      </div>
    </div>
  )
}

export default LeftNav

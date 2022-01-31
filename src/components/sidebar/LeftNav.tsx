import React, { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import FilterByBrand from './FilterByBrand'
import FilterByGender from './FilterByGender'
import FilterByPrice from './FilterByPrice'
import FilterByDiscount from './FilterByDiscount'

const LeftNav = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button className='flex mb-6 lg:hidden' onClick={() => setShow(!show)}>
        Filter
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

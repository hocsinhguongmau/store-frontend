import React, { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { useRouter } from 'next/router'
import FilterByBrand from './FilterByBrand'
import FilterByGender from './FilterByGender'
import FilterByPrice from './FilterByPrice'

type NavProps = {
  gender?: boolean | undefined
  brand?: boolean | undefined
}

const LeftNav = ({ gender = true, brand = true }: NavProps) => {
  const router = useRouter()
  const [discount, setDiscount] = useState<boolean>(
    router.query.discount === 'true',
  )
  const [show, setShow] = useState(false)

  const handleDiscountRouter = () => {
    setDiscount(!discount)
    router.push({
      pathname: '/shop',
      query: { ...router.query, discount: discount },
    })
  }
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
        <FilterByGender gender={gender} />
        <FilterByPrice />
        <FilterByBrand brand={brand} />
        <p>
          <input
            type='checkbox'
            checked={discount}
            id='discount'
            className='mr-4'
            onChange={handleDiscountRouter}
          />
          <label htmlFor='discount'>Sales</label>
        </p>
      </div>
    </div>
  )
}

export default LeftNav

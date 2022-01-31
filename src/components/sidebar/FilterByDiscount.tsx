import { useRouter } from 'next/router'
import React, { useState } from 'react'

const FilterByDiscount = () => {
  const router = useRouter()
  const [discount, setDiscount] = useState<boolean>(
    router.query.discount === 'true',
  )
  const handleDiscountRouter = () => {
    setDiscount(!discount)
    router.push({
      pathname: '/shop',
      query: { ...router.query, discount: !discount },
    })
  }
  return (
    <p>
      <input
        type='checkbox'
        checked={discount}
        id='discount'
        className='mr-4 h-4 w-4 align-middle'
        onChange={handleDiscountRouter}
      />
      <label htmlFor='discount' className='text-sm'>
        Sales
      </label>
    </p>
  )
}

export default FilterByDiscount

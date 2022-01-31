import { useRouter } from 'next/router'
import React from 'react'

const SortBy = () => {
  const router = useRouter()
  const handleOrderProducts = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const params = event.target.value
    router.push({
      pathname: router.pathname,
      query: { ...router.query, order: params },
    })
  }
  return (
    <select
      className='outline-none mt-4 lg:mt-0 text-sm'
      onChange={handleOrderProducts}
      defaultValue={router.query.order}>
      <option value=''>Newest</option>
      <option value='sell'>Best selling</option>
      <option value='price_asc'>Price: Low to High</option>
      <option value='price_desc'>Price: High to Low</option>
    </select>
  )
}

export default SortBy

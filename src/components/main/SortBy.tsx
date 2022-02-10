import { useRouter } from 'next/router'
import React from 'react'

const SortBy = () => {
  const router = useRouter()
  const handleOrderProducts = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let path = router.pathname
    const params = event.target.value
    let hmm = { ...router.query, order: params, page_slug: '1' }

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

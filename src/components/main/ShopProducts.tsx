import Loading from '@components/Loading'
import { useShopProduct } from '@src/hooks/useShopProduct'
import { useRouter } from 'next/router'
import React from 'react'
import ProductItem from './ProductItem'

const ShopProducts = () => {
  const { query } = useRouter()
  const sort = query.order as string
  const gender = query.gender as string
  const discount = query.discount as string
  const price = query.price as string[]
  const brand = query.brand as string
  const { isLoading, isError, error, data } = useShopProduct(
    sort,
    gender,
    discount,
    price,
    brand,
  )
  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return (
      <div>
        <p>{error?.message}</p>
      </div>
    )
  }
  if (data === undefined || data.products.length < 1) {
    return (
      <div className='container text-center text-2xl font-bold mt-12'>
        No product found!
      </div>
    )
  } else {
    return (
      <div className='grid grid-cols-2 md:grid-cols-3  gap-4 mt-8'>
        {data?.products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
        {/* {numberOfPosts > postsPerPage ? (
            <Pagination
              currentPage={1}
              numberOfPosts={5!}
              postsPerPage={12}
              maxPages={5}
              urlName={`shop`}
            />
            ) : (
              ''
            )} */}
      </div>
    )
  }
}

export default ShopProducts

import Loading from '@components/Loading'
import { useShopProduct } from '@src/hooks/useShopProduct'
import { useRouter } from 'next/router'
import React from 'react'
import Pagination from './Pagination'
import ProductItem from './ProductItem'

const productsPerPage = 12

const ShopProducts = () => {
  const { query } = useRouter()
  const sort = query.order as string
  const gender = query.gender as string
  const discount = query.discount as string
  const price = query.price as string[]
  const brand = query.brand as string
  const { isLoading, isError, error, data } = useShopProduct()
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
      <>
        <div className='grid grid-cols-2 md:grid-cols-3  gap-4 mt-8'>
          {data?.products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
        {data.numberOfProducts > productsPerPage ? (
          <Pagination
            currentPage={1}
            numberOfProducts={data.numberOfProducts}
            productsPerPage={12}
            maxPages={5}
            urlName={`shop`}
          />
        ) : (
          ''
        )}
      </>
    )
  }
}

export default ShopProducts

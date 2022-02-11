import Loading from '@components/Loading'
import { useFavoriteItems } from '@src/hooks/useFavoriteItems'
import { useShopProduct } from '@src/hooks/useShopProduct'
import { mainPageContent } from '@src/lib/locale/shop'
import useLanguageStore from '@src/lib/store/languageStore'
import { Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import ProductItem from './ProductItem'

type Props = {
  productsPerPage: number
  page: number
}

const ShopProducts = ({ productsPerPage, page }: Props) => {
  const language = useLanguageStore((state) => state.language)
  const { isLoading, isError, error, data } = useShopProduct(
    productsPerPage * page - productsPerPage,
    productsPerPage * page,
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
        {mainPageContent[language].noItem}
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
            currentPage={page}
            numberOfProducts={data.numberOfProducts}
            productsPerPage={productsPerPage}
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

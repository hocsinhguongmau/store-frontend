import Loading from '@components/Loading'
import { useFavoriteItems } from '@src/hooks/useFavoriteItems'
import React from 'react'
import ProductItem from './ProductItem'

type Props = {
  favItems: string
}

const FavoriteItems = ({ favItems }: Props) => {
  const { isLoading, isError, error, data } = useFavoriteItems(favItems)
  console.log('favItem', favItems)
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

  if (data?.length) {
    return (
      <>
        {data.map((product) => (
          <ProductItem key={product.id} button={true} product={product} />
        ))}
      </>
    )
  } else {
    return <div>No favorite item</div>
  }
}

export default FavoriteItems

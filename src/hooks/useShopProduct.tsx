import { getAllProducts } from '@src/lib/queries/product'
import { useQuery, UseQueryResult } from 'react-query'

export const useShopProduct = (
  sort: string,
  gender: string,
  discount: string,
  price: string[],
  brand: string,
) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<shopPageProductsType | undefined, Error> = useQuery<
    shopPageProductsType | undefined,
    Error
  >(['all_products', sort, gender, discount, price, brand], () =>
    getAllProducts(sort, gender, discount, price, brand),
  )

  return { isLoading, isError, error, data }
}

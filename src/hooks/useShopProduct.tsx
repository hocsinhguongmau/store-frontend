import { getAllProducts } from '@src/lib/queries/product'
import { useRouter } from 'next/router'
import { useQuery, UseQueryResult } from 'react-query'

export const useShopProduct = () => {
  const { query } = useRouter()
  const sort = query.order as string
  const gender = query.gender as string
  const discount = query.discount as string
  const price = query.price as string[]
  const brand = query.brand as string
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<shopPageProductsType | undefined, Error> = useQuery<
    shopPageProductsType | undefined,
    Error
  >(
    [
      'all_products',
      'sort:' + sort,
      'gender:' + gender,
      'discount:' + discount,
      'price:' + price,
      'brand:' + brand,
    ],
    () => getAllProducts(sort, gender, discount, price, brand),
  )

  return { isLoading, isError, error, data }
}

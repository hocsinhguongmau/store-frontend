import { getAllProducts } from '@src/lib/queries/product'
import { useRouter } from 'next/router'
import { useQuery, UseQueryResult } from 'react-query'

export const useShopProduct = (start: number, end: number) => {
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
      sort ? 'sort:' + sort : 'sort',
      gender ? 'gender:' + gender : 'gender',
      discount ? 'discount:' + discount : 'discount',
      price ? 'price:' + price : 'price',
      brand ? 'brand:' + brand : 'brand',
      query.page_slug ? 'page:' + query.page_slug : 'page',
    ],
    () => getAllProducts(sort, gender, discount, price, brand, start, end),
  )
  return { isLoading, isError, error, data }
}

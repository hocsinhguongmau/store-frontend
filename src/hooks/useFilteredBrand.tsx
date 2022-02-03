import { getFilteredBrands } from '@src/lib/queries/brand'
import { useRouter } from 'next/router'
import { useQuery, UseQueryResult } from 'react-query'

export const useFilteredBrand = () => {
  const { query } = useRouter()
  const gender = query.gender as string
  const discount = query.discount as string
  const price = query.price as string[]

  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<FilteredBrandType[] | undefined, Error> = useQuery<
    FilteredBrandType[] | undefined,
    Error
  >(
    [
      'all_products',
      gender ? 'gender:' + gender : 'gender',
      discount ? 'discount:' + discount : 'discount',
      price ? 'price:' + price : 'price',
    ],
    () => getFilteredBrands(gender, discount, price),
  )

  return { isLoading, isError, error, data }
}

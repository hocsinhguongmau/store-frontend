import { getFavoriteItems } from '@src/lib/queries/product'
import { useQuery, UseQueryResult } from 'react-query'

export const useFavoriteItems = (array: string) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<ProductType[] | undefined, Error> = useQuery<
    ProductType[] | undefined,
    Error
  >(['favorite_items', array], () => getFavoriteItems(array))

  return { isLoading, isError, error, data }
}

import { getFavoriteItems } from '@src/lib/queries/favorite'
import { useQuery, UseQueryResult } from 'react-query'

export const useFavoriteItems = (list: string[] | undefined) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<ProductType[] | undefined, Error> = useQuery<
    ProductType[] | undefined,
    Error
  >(
    ['favorite_items', list],
    () => {
      if (list !== undefined) {
        return getFavoriteItems(list)
      }
    },
    {
      // staleTime: 0,
      // refetchOnWindowFocus: true,
    },
  )

  return { isLoading, isError, error, data }
}

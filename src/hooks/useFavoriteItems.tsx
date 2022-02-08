import { getFavoriteItems } from '@src/lib/queries/product'
import { useQuery, UseQueryResult } from 'react-query'

export const useFavoriteItems = (email: string) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<FavoriteItem | undefined, Error> = useQuery<
    FavoriteItem | undefined,
    Error
  >(['favorite_items', email], () => getFavoriteItems(email), {
    refetchOnWindowFocus: true,
  })

  return { isLoading, isError, error, data }
}

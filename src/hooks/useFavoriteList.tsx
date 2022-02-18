import { getFavoriteList } from '@src/lib/queries/favorite'
import { useQuery, UseQueryResult } from 'react-query'

export const useFavoriteList = (email: string) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<FavoriteList | undefined, Error> = useQuery<
    FavoriteList | undefined,
    Error
  >(['favorite_list', email], () => getFavoriteList(email), {
    // staleTime: 0,
    // refetchOnWindowFocus: true,
  })

  return { isLoading, isError, error, data }
}

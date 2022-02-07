import { getMainPageProducts } from '@src/lib/queries/product'
import { useQuery, UseQueryResult } from 'react-query'

export const useMainProducts = () => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<mainPageProductsType | undefined, Error> = useQuery<
    mainPageProductsType | undefined,
    Error
  >(['main_products'], getMainPageProducts)

  return { isLoading, isError, error, data }
}

export default useMainProducts

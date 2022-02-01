import { getAllBrands } from '@src/lib/queries/brand'
import { useQuery, UseQueryResult } from 'react-query'

export const useBrand = () => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<BrandType[] | undefined, Error> = useQuery<
    BrandType[] | undefined,
    Error
  >(['all_brands'], getAllBrands)

  return { isLoading, isError, error, data }
}

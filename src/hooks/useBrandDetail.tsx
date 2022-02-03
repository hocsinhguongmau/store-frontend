import { getBrandDetail } from '@src/lib/queries/brand'
import { useQuery, UseQueryResult } from 'react-query'

export const useBrandDetail = (brand_slug: string) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<BrandDetailType | undefined, Error> = useQuery<
    BrandDetailType | undefined,
    Error
  >(['brand_detail:' + brand_slug], () => getBrandDetail(brand_slug))

  return { isLoading, isError, error, data }
}

import { getProductDetail } from '@src/lib/queries/product'
import { useQuery, UseQueryResult } from 'react-query'

export const useProductDetail = (brand_slug: string, slug: string) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<ProductDetailType | undefined, Error> = useQuery<
    ProductDetailType,
    Error
  >(['product_detail: ' + slug], () => getProductDetail(brand_slug, slug))
  return { isLoading, isError, error, data }
}

import { getOrderHistory } from '@src/lib/queries/order'
import { useQuery, UseQueryResult } from 'react-query'

export const useOrderHistory = (email: string) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<OrderHistoryType[] | undefined, Error> = useQuery<
    OrderHistoryType[] | undefined,
    Error
  >(['order_history:' + email], () => getOrderHistory(email))

  return { isLoading, isError, error, data }
}

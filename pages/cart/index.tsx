import { getSideBar } from '@src/lib/queries/product'
import React from 'react'
import { useQuery, UseQueryResult } from 'react-query'

const Cart = () => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<any | undefined, Error> = useQuery<any | undefined, Error>(
    ['cc'],
    getSideBar,
  )
  if (data) {
    console.log(data)
  }
  return <div>cart</div>
}

export default Cart

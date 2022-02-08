import Loading from '@components/Loading'
import { useOrderHistory } from '@src/hooks/useOrderHistory'
import { Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

type OrderProps = {
  order: OrderHistoryType
}

const Order = ({ order }: OrderProps) => {
  return (
    <tr>
      <td className='p-2 border border-gray-400'>{order._id}</td>
      <td className='p-2 border border-gray-400'>{order._createdAt}</td>
      <td className='p-2 border border-gray-400'>{order.email}</td>
      <td className='p-2 border border-gray-400 capitalize'>{order.status}</td>
      <td className='p-2 border border-gray-400'>{order.total}</td>
    </tr>
  )
}

function OrderHistory() {
  const [profile, setProfile] = useState<IProfile>()
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        setProfile(user.attributes)
      } catch (error) {
        console.log(error)
      }
    }

    checkAuth()
  }, [])

  const { isLoading, isError, error, data } = useOrderHistory(
    profile?.email as string,
  )

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return (
      <div>
        <p>{error?.message}</p>
      </div>
    )
  }

  if (data) {
    return (
      <table className='mt-6 border border-gray-400 w-full'>
        <thead>
          <tr className='text-left'>
            <th className='p-2 border border-gray-400'>Order ID</th>
            <th className='p-2 border border-gray-400'>Date</th>
            <th className='p-2 border border-gray-400'>Email</th>
            <th className='p-2 border border-gray-400'>Status</th>
            <th className='p-2 border border-gray-400'>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <Order key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    )
  } else {
    return <div>No payment</div>
  }
}

export default OrderHistory

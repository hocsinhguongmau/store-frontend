import Loading from '@components/Loading'
import { useOrderHistory } from '@src/hooks/useOrderHistory'
import { client } from '@src/lib/client'
import { mainPageContent } from '@src/lib/locale/shop'
import useLanguageStore from '@src/lib/store/languageStore'
import { Auth } from 'aws-amplify'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiEye } from 'react-icons/hi'

type OrderProps = {
  index: number
  order: OrderHistoryType
}

const Img = ({ imgUrl }: any) => {
  const imageProps = useNextSanityImage(client, imgUrl)
  return <Image {...imageProps} width={50} height={80} />
}

const Order = ({ order, index }: OrderProps) => {
  console.log(order)
  const info = order.userInfo[0]
  const orderedItems = order.carts
  const [show, setShow] = useState(false)
  return (
    <>
      <tr className='text-sm bg-gray-200'>
        <td className='p-2 border border-gray-400 text-center'>{index}</td>
        <td className='p-2 border border-gray-400 whitespace-nowrap'>
          {order._id}
        </td>
        <td className='p-2 border border-gray-400 whitespace-nowrap'>
          {order._createdAt.slice(0, 10)}
        </td>
        <td className='p-2 border border-gray-400 capitalize'>
          {order.status}
        </td>
        <td className='p-2 border border-gray-400'>{order.total}</td>
        <td className='p-2 border border-gray-400 text-center'>
          <button
            className='flex flex-row whitespace-nowrap'
            onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'View'} order{' '}
            <HiEye className='ml-1 self-center' />
          </button>
        </td>
      </tr>
      <tr className={`${show ? '' : 'hidden'}`}>
        <td colSpan={6} className='text-sm p-4 leading-6'>
          <div className='flex flex-row w-full gap-12'>
            <div className='w-3/5'>
              <p className='font-bold'>Items purchased</p>
              {orderedItems.map((item) => (
                <div
                  key={item._key}
                  className='mt-2 flex flex-row gap-4 w-full justify-between'>
                  <Link href={`${item.href}?size=${item.size}`}>
                    <a>
                      <Img imgUrl={item.image} />
                    </a>
                  </Link>
                  <p className='font-bold self-center'>
                    <Link href={`${item.href}?size=${item.size}`}>
                      <a>
                        {item.name} {item.size}ml
                      </a>
                    </Link>
                  </p>
                  <p className='self-center'>x{item.quantity}</p>
                  <p className='self-center'>{item.price}&euro;</p>
                  <p className='self-center'>{item.itemTotal}&euro;</p>
                </div>
              ))}
            </div>
            <div className='w-2/5'>
              <p className='font-bold'>Billing information</p>
              <p>
                <span className='font-bold'>Name:</span> {info.name}
              </p>
              <p>
                <span className='font-bold'>Address:</span> {info.address}
              </p>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}

function OrderHistory() {
  const language = useLanguageStore((state) => state.language)
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
      <>
        {data.length > 0 ? (
          <>
            <table className='mt-6 border border-gray-400 w-full'>
              <thead>
                <tr className='text-left'>
                  <th className='p-4 border border-gray-400'></th>
                  <th className='p-2 border border-gray-400'>
                    {mainPageContent[language].orderId}
                  </th>
                  <th className='p-2 border border-gray-400'>
                    {mainPageContent[language].date}
                  </th>
                  <th className='p-2 border border-gray-400'>
                    {mainPageContent[language].status}
                  </th>
                  <th className='p-2 border border-gray-400'>
                    {mainPageContent[language].total}
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => (
                  <Order key={order._id} index={index} order={order} />
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className='mt-8 text-center'>
            <Image src='/images/no-history.jpg' width={300} height={375} />
            <p className='mt-8 font-bold text-2xl capitalize'>
              {mainPageContent[language].noPurchase}
            </p>
            <p className='mt-2'>{mainPageContent[language].noOrder}</p>
            <Link href='/shop/page/1'>
              <a className='button inline-block mt-4'>
                {mainPageContent[language].backTopShop}
              </a>
            </Link>
          </div>
        )}
      </>
    )
  } else {
    return <div>{mainPageContent[language].noPayment}</div>
  }
}

export default OrderHistory

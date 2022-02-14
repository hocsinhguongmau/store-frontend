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

type OrderProps = {
  order: OrderHistoryType
}

const Img = ({ imgUrl }: any) => {
  const imageProps = useNextSanityImage(client, imgUrl)
  return <Image {...imageProps} width={50} height={80} />
}

const Order = ({ order }: OrderProps) => {
  console.log(order)
  const info = order.userInfo[0]
  const orderedItems = order.carts
  const [show, setShow] = useState(false)
  return (
    <>
      <tr className='text-sm'>
        <td className='p-2 border border-gray-400'>{order._id}</td>
        <td className='p-2 border border-gray-400'>{order._createdAt}</td>
        <td className='p-2 border border-gray-400'>{order.email}</td>
        <td className='p-2 border border-gray-400 capitalize'>
          {order.status}
        </td>
        <td className='p-2 border border-gray-400'>{order.total}</td>
        <td className='p-2 border border-gray-400 text-center'>
          <button className='hover:text-red-500' onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'View'} order
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
                  <p className='self-center'>
                    {item.price} {item.currency}
                  </p>
                  <p className='self-center'>
                    {item.itemTotal} {item.currency}
                  </p>
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
                  <th className='p-2 border border-gray-400'>
                    {mainPageContent[language].orderId}
                  </th>
                  <th className='p-2 border border-gray-400'>
                    {mainPageContent[language].date}
                  </th>
                  <th className='p-2 border border-gray-400'>
                    {mainPageContent[language].email}
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
                {data.map((order) => (
                  <Order key={order._id} order={order} />
                ))}
              </tbody>
            </table>
            {/* <div className='mt-8'>
              <div className='flex flex-row gap-4'>
                <Image src='/images/item.jpeg' width={50} height={100} />
                <div className='w-full pl-4 '>
                  <p>Ferrari Red Power Ice 3</p>
                  <p className='text-gray-400 text-sm'>
                    Eau de toillet for men 125ml
                  </p>
                </div>
                <div>1pc</div>
                <div className='font-bold'>29.60&euro;</div>
              </div>
              <div className='flex flex-row gap-4'>
                <Image src='/images/item.jpeg' width={50} height={100} />
                <div className='w-full pl-4 '>
                  <p>Ferrari Red Power Ice 3</p>
                  <p className='text-gray-400 text-sm'>
                    Eau de toillet for men 125ml
                  </p>
                </div>
                <div>1pc</div>
                <div className='font-bold'>29.60&euro;</div>
              </div>
            </div>
            <div className='mt-4 text-sm leading-6'>
              <p className='font-bold text-lg'>Information</p>
              <p>thangnguyen24111990@gmail.com</p>
              <p>Address: Pursimiehenkatu 12</p>
              <p>Country: Helsinki</p>
              <p>Postal code: 00150</p>
            </div> */}
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

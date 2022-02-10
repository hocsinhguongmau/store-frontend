import CartProduct from '@components/cart/CartProduct'
import { Auth } from 'aws-amplify'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart/react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import SandBox from '@components/main/SandBox'
import { postOrder } from '@src/lib/queries/order'
import Link from 'next/link'
import Image from 'next/image'

interface OnApproveData {
  billingToken?: string | null
  facilitatorAccessToken: string
  orderID: string
  payerID?: string | null
  paymentID?: string | null
  subscriptionID?: string | null
  authCode?: string | null
}

const CartPage: NextPage = () => {
  const [profile, setProfile] = useState<IProfile>()
  const router = useRouter()
  const { totalPrice, cartCount, clearCart } = useShoppingCart()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        setProfile(user.attributes)
      } catch (error) {
        router.push('/profile', undefined, { shallow: true })
      }
    }
    checkAuth()
  }, [])

  if (profile?.email) {
    return (
      <div className='container'>
        {cartCount ? (
          <div className='flex flex-row'>
            <div className='w-2/3 pr-8'>
              <h1 className='no-underline text-2xl'>Shopping Cart</h1>
              <CartProduct />
              <div className='flex flex-row justify-between mt-8'>
                <div className=''>
                  <p className='text-sm'>
                    <span className='font-bold'>Number of Items:</span>{' '}
                    {cartCount}
                  </p>
                  <p className='text-sm mt-1'>
                    <span className='font-bold'>Total:</span> {totalPrice}&euro;
                  </p>
                </div>
                <button className='button' onClick={clearCart}>
                  Delete all items
                </button>
              </div>
              <SandBox />
            </div>
            <div className='w-1/3'>
              <PayPalButtons
                forceReRender={[totalPrice]}
                createOrder={(_data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: totalPrice,
                        },
                      },
                    ],
                  })
                }}
                onCancel={(_data, actions: any) => {
                  return actions.order.capture().then((details: any) => {
                    postOrder(
                      profile.email as string,
                      'cancel',
                      totalPrice + '€',
                    )
                    clearCart()
                    router.push('/success')
                  })
                }}
                onApprove={(_data, actions: any) => {
                  return actions.order.capture().then((details: any) => {
                    console.log(details.purchase_units[0])
                    postOrder(
                      profile.email as string,
                      details.status,
                      details.purchase_units[0].amount.value + '€',
                    )
                      .then(() => clearCart())
                      .then(() => router.push('/success'))
                  })
                }}
              />
            </div>
          </div>
        ) : (
          <div className='text-center'>
            <Image src='/images/cart-empty.jpg' height={183} width={500} />
            <p className='mt-8'>Your cart is currently empty</p>
            <p>
              <Link href='/shop'>
                <a className='button inline-block mt-4'>Return to shop</a>
              </Link>
            </p>
          </div>
        )}
      </div>
    )
  } else {
    return <div></div>
  }
}

export default CartPage

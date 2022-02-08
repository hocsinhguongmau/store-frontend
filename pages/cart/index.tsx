import CartProduct from '@components/cart/CartProduct'
import { Auth } from 'aws-amplify'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart/react'
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from '@paypal/react-paypal-js'
import { useMutation } from 'react-query'
import axios, { AxiosError } from 'axios'
import SandBox from '@components/main/SandBox'

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
  const createMutation = useMutation<{ data: any }, AxiosError, any, Response>(
    (): any => axios.post('/api/paypal/createOrder'),
  )
  const captureMutation = useMutation<string, AxiosError, any, Response>(
    (data): any => axios.post('/api/paypal/captureOrder', data),
  )

  const createPayPalOrder = async (): Promise<string> => {
    const response = await createMutation.mutateAsync({})
    return response.data.orderID
  }
  const onApprove = async (data: OnApproveData): Promise<void> => {
    return captureMutation.mutate({ orderID: data.orderID })
  }

  const [profile, setProfile] = useState<IProfile>()
  const router = useRouter()
  const { totalPrice, redirectToCheckout, cartCount, clearCart, cartDetails } =
    useShoppingCart()
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
              <PayPalScriptProvider
                options={{
                  'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                }}>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    console.log(data)
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
                  onApprove={(data, actions: any) => {
                    return actions.order.capture().then((details: any) => {
                      const name = details.payer.name.given_name
                      alert(`Transaction completed by ${name}`)
                    })
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        ) : (
          <div>No product in cart</div>
        )}
        {captureMutation.data && (
          <div>{JSON.stringify(captureMutation.data)}</div>
        )}
      </div>
    )
  } else {
    return <div></div>
  }
}

export default CartPage

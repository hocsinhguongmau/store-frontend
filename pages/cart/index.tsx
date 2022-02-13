import CartProduct from '@components/cart/CartProduct'
import { Auth } from 'aws-amplify'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import SandBox from '@components/main/SandBox'
import { postOrder } from '@src/lib/queries/order'
import Link from 'next/link'
import Image from 'next/image'
import useLanguageStore from '@src/lib/store/languageStore'
import { mainPageContent } from '@src/lib/locale/shop'
import Head from 'next/head'
import { useCart } from 'react-use-cart'

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
  const language = useLanguageStore((state) => state.language)
  const [profile, setProfile] = useState<IProfile>()
  const router = useRouter()
  const { emptyCart, cartTotal, totalItems } = useCart()

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
      <div>
        <Head>
          <title>Odour</title>
        </Head>
        <div className='container'>
          {totalItems ? (
            <div className='flex flex-row'>
              <div className='w-2/3 pr-8'>
                <h1 className='no-underline text-2xl'>
                  {mainPageContent[language].shoppingCart}
                </h1>
                <CartProduct />
                <div className='flex flex-row justify-between mt-8'>
                  <div className=''>
                    <p className='text-sm'>
                      <span className='font-bold'>
                        {mainPageContent[language].numberOfItems}:
                      </span>{' '}
                      {totalItems}
                    </p>
                    <p className='text-sm mt-1'>
                      <span className='font-bold'>
                        {mainPageContent[language].total}:
                      </span>{' '}
                      {cartTotal}&euro;
                    </p>
                  </div>
                  <button className='button' onClick={emptyCart}>
                    {mainPageContent[language].deleteAll}
                  </button>
                </div>
                <SandBox />
              </div>
              <div className='w-1/3'>
                <PayPalButtons
                  forceReRender={[cartTotal]}
                  createOrder={(_data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: cartTotal.toString(),
                          },
                        },
                      ],
                    })
                  }}
                  onApprove={(data, actions: any) => {
                    console.log(data)
                    return actions.order.capture().then((details: any) => {
                      postOrder(
                        profile.email as string,
                        details.status,
                        details.purchase_units[0].amount.value + '€',
                      )
                        .then(() => emptyCart())
                        .then(() => router.push('/success'))
                    })
                  }}
                />
              </div>
            </div>
          ) : (
            <div className='text-center'>
              <Image src='/images/cart-empty.jpg' height={183} width={500} />
              <p className='mt-8'>{mainPageContent[language].emptyCart}</p>
              <p>
                <Link href='/shop/page/1'>
                  <a className='button inline-block mt-4'>
                    {mainPageContent[language].returnShop}
                  </a>
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default CartPage

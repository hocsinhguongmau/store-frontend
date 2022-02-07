import CartProduct from '@components/cart/CartProduct'
import { fetchPostJSON } from '@src/lib/stripe/api-helpers'
import { Auth } from 'aws-amplify'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart/react'

const CartPage: NextPage = () => {
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

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault()

    const response = await fetchPostJSON(
      '/api/checkout_sessions/cart',
      cartDetails,
    )

    if (response.statusCode > 399) {
      console.error(response.message)
      return
    }

    redirectToCheckout({ sessionId: response.id })
  }

  if (profile?.email) {
    return (
      <div className='container'>
        {cartCount ? (
          <form onSubmit={handleCheckout}>
            <h1 className='no-underline text-2xl'>Shopping Cart</h1>
            <CartProduct />
            <p className='text-sm mt-8'>
              <span className='font-bold'>Number of Items:</span> {cartCount}
            </p>
            <p className='text-sm mt-1'>
              <span className='font-bold'>Total:</span> {totalPrice}&euro;
            </p>
            <div className='mt-4'>
              <button className='button' onClick={clearCart}>
                Delete all items
              </button>
              <button className='button ml-4' type='submit'>
                Checkout
              </button>
            </div>
          </form>
        ) : (
          <div>No product in cart</div>
        )}
      </div>
    )
  } else {
    return <div></div>
  }
}

export default CartPage

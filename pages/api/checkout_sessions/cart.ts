import { NextApiRequest, NextApiResponse } from 'next'
import { validateCartItems } from 'use-shopping-cart/utilities/serverless'
import Stripe from 'stripe'
import { getAllProducts } from '@src/lib/queries/product'
import { formatLineItems } from '@src/lib/utils/formatLIneItems'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
})

const inventory = getAllProducts()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const hmm = formatLineItems(req.body)
    console.log('hmm', hmm)
    try {
      const line_items = validateCartItems(inventory as any, hmm)
      const hasSubscription = line_items.find((item) => {
        return !!item.price_data.recurring
      })
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: 'pay',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['US', 'CA'],
        },
        line_items,
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/use-shopping-cart`,
        mode: hasSubscription ? 'subscription' : 'payment',
      }

      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params)

      res.status(200).json(checkoutSession)
    } catch (err) {
      console.log(err)
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

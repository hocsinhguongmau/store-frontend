import { client } from '../client'

export const postOrder = async (
  email: string,
  status: string,
  total: string,
) => {
  const newOrder: PostOrderType = {
    _type: 'payment',
    email: email,
    status: status,
    total: total,
  }
  const mutations = [
    {
      create: newOrder,
    },
  ]

  fetch(
    `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/${process.env.NEXT_PUBLIC_API_VERSION}/data/mutate/${process.env.NEXT_PUBLIC_PROJECT_DATASET}`,
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    },
  )
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export const getOrderHistory = async (
  email: string,
): Promise<OrderHistoryType[]> => {
  return await client.fetch(
    `*[_type=="payment" && email=="${email}"]|order(_createdAt desc)`,
  )
}

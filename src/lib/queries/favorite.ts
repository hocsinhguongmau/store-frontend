import { client } from '../client'

export const postFavorite = async (email: string, products: string[]) => {
  const newFavorite: PostFavoriteType = {
    _type: 'favorite',
    email: email,
    product: products,
  }
  const mutations = [
    {
      create: newFavorite,
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

export const getFavorite = async (
  email: string,
): Promise<OrderHistoryType[]> => {
  return await client.fetch(
    `*[_type=="favorite" && email=="${email}"]|order(_createdAt desc)`,
  )
}

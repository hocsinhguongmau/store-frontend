import { client } from '../client'
import { queryResult } from './product'
import groq from 'groq'

export const postFavorite = async (
  id: string,
  email: string,
  products: string[],
) => {
  const newFavorite: PostFavoriteType = {
    _type: 'favorite',
    email: email,
    products: products,
    _id: id,
  }
  const mutations = [
    {
      createOrReplace: newFavorite,
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

export const getFavoriteList = async (email: string): Promise<FavoriteList> => {
  const query = `*[_type=='favorite' && email=="${email}"][0]{products}`
  return await client.fetch(query)
}
export const getFavoriteItems = async (
  favorites: string[],
): Promise<ProductType[]> => {
  let newArray = null
  if (favorites !== null) {
    newArray = "'" + favorites.join("','") + "'"
  }

  const query = `*[_type=='product' && _id in [${newArray}]]${queryResult}`
  return await client.fetch(query)
}

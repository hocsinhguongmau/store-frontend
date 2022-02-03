import { client } from '@lib/client'

import { v4 as uuidv4 } from 'uuid'

type PostCommentType = {
  _type: string
  approved: boolean
  comment: string
  product: {
    _ref: string
  }
  rating: number
  email: string
}

export const postComment = async (
  comment: string,
  email: string,
  rating: number,
  product: string,
) => {
  const userComment = {
    _type: 'comment',
    approved: false,
    comment: comment,
    product: {
      _ref: product,
    },
    rating: rating,
    email: email,
  }
  const mutations = [
    {
      create: userComment,
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
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
}

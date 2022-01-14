import React from 'react'
import { useRouter } from 'next/router'

const ProductDetail = () => {
  const router = useRouter()
  console.log(router.query)
  return <div>hmm</div>
}

export default ProductDetail

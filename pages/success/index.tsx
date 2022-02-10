import Link from 'next/link'
import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

function Success() {
  return (
    <div className='container text-center'>
      <AiOutlineCheckCircle className='mx-auto text-5xl text-green-500' />
      <p className='mt-4'>Thank you for your purchase</p>
      <p className='mt-4'>
        <Link href='/shop'>
          <a className='button inline-block'>Continue Shopping</a>
        </Link>
      </p>
    </div>
  )
}

export default Success

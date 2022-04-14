import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <div className='w-32'>
      <Link href='/'>
        <a className=''>
          <Image src='/images/logo.png' width={162} height={50} alt='logo' />
        </a>
      </Link>
    </div>
  )
}

export default Logo

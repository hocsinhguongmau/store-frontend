import Link from 'next/link'
import React from 'react'

interface Props {}

const NavigationDesktop = (props: Props) => {
  return (
    <ul className='flex-row gap-10 items-center hidden lg:flex'>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Shop</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Women</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Men</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Unisex</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>About us</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Contact us</a>
        </Link>
      </li>
    </ul>
  )
}

export default NavigationDesktop

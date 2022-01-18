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
        <Link href='/shop'>
          <a>Shop</a>
        </Link>
      </li>
      <li>
        <Link href='/shop?sales=sales'>
          <a>Sales</a>
        </Link>
      </li>
      <li>
        <Link href='/shop?gender=women'>
          <a>Women</a>
        </Link>
      </li>
      <li>
        <Link href='/shop?gender=men'>
          <a>Men</a>
        </Link>
      </li>
      <li>
        <Link href='/shop?gender=unisex'>
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

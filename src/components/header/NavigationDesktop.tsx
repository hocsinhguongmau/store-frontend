import Link from 'next/link'
import React from 'react'

const NavigationDesktop = () => {
  return (
    <ul className='flex-row gap-5 items-center hidden lg:flex'>
      <li>
        <Link href='/'>
          <a className='hover:text-red-500'>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/shop'>
          <a className='hover:text-red-500'>Shop</a>
        </Link>
      </li>
      <li>
        <Link href='/shop?discount=true'>
          <a className='hover:text-red-500'>Sales</a>
        </Link>
      </li>
      <li>
        <Link href='/shop?gender=women'>
          <a className='hover:text-red-500'>Women</a>
        </Link>
      </li>
      <li>
        <Link href='/shop?gender=men'>
          <a className='hover:text-red-500'>Men</a>
        </Link>
      </li>
      <li>
        <Link href='/shop?gender=unisex'>
          <a className='hover:text-red-500'>Unisex</a>
        </Link>
      </li>
      <li>
        <Link href='/brand'>
          <a className='hover:text-red-500'>Brand</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a className='hover:text-red-500'>About us</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a className='hover:text-red-500'>Contact us</a>
        </Link>
      </li>
    </ul>
  )
}

export default NavigationDesktop

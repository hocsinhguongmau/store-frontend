import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import Profile from './Profile'

interface Props {}

const NavigationDesktop = (props: Props) => {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div className='lg:hidden relative z-50'>
      <button
        className='p-1 space-y-2 border-2 border-solid rounded-md border-red-500 mt-3'
        onClick={() => setActive(true)}>
        <GiHamburgerMenu className='text-2xl text-red-500' />
      </button>

      <div
        className={`fixed top-0 z-50  bg-black py-4 px-8 text-white max-w-1/2 w-full h-full transition-all duration-300 ease-out ${
          active ? 'left-0' : '-left-full'
        }`}>
        <button
          className='absolute top-4 right-4 text-white text-4xl z-50'
          onClick={() => setActive(false)}>
          <IoCloseSharp />
        </button>
        <ul>
          <li className='text-xl py-2'>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className='text-xl py-2'>
            <Link href='/shop'>
              <a>Shop</a>
            </Link>
          </li>
          <li className='text-xl py-2'>
            <Link href='/shop?discount=true'>
              <a>Sales</a>
            </Link>
          </li>
          {/* <li className='text-xl py-2'>
            <Link href='/shop?gender=women'>
              <a>Women</a>
            </Link>
          </li>
          <li className='text-xl py-2'>
            <Link href='/shop?gender=men'>
              <a>Men</a>
            </Link>
          </li>
          <li className='text-xl py-2'>
            <Link href='/shop?gender=unisex'>
              <a>Unisex</a>
            </Link>
          </li> */}
          <li className='text-xl py-2'>
            <Link href='/brand'>
              <a>Brand</a>
            </Link>
          </li>
          <li className='text-xl py-2'>
            <Link href='/'>
              <a>About us</a>
            </Link>
          </li>
          <li className='text-xl py-2'>
            <Link href='/'>
              <a>Contact us</a>
            </Link>
          </li>
        </ul>
        <Profile />
      </div>
    </div>
  )
}

export default NavigationDesktop

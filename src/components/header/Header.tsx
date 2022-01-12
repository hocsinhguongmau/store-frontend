import React, { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsSearch, BsPersonCircle } from 'react-icons/bs'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Header(): ReactElement {
  return (
    <header className='py-6'>
      <div className='container flex flex-row justify-between'>
        <div className=''>
          <Link href='/'>
            <a>
              <Image src='/images/logo.png' width={162} height={50} />
            </a>
          </Link>
        </div>
        <ul className='flex flex-row gap-10 items-center'>
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
        <div className='flex flex-row items-center gap-2'>
          <BsSearch />
          {/* not logged in */}
          <Link href='/profile'>
            <a>
              <BiLogIn />
            </a>
          </Link>
          {/* logged in */}
          {/* <BsPersonCircle />
          <AiOutlineShoppingCart />
          <BiLogOut /> */}
        </div>
      </div>
    </header>
  )
}

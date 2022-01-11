import React, { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(): ReactElement {
  return (
    <header>
      <div className='container flex flex-row mx-auto'>
        <div className=''>
          <Image src='/images/logo.png' width={162} height={50} />
        </div>
        <ul>
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
      </div>
    </header>
  )
}

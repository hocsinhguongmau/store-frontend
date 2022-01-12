import React, { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(): ReactElement {
  return (
    <footer className='py-6'>
      <div className='container'>
        <div className='grid grid-cols-4 gap-4'>
          <div>
            <Link href='/'>
              <a>
                <Image src='/images/logo.png' width={162} height={50} />
              </a>
            </Link>
            <div className='mt-2'>&copy; copyright</div>
          </div>
          <div>
            <h3 className='font-bold text-2xl'>Fragrances</h3>
            <ul>
              <li className='mt-2'>
                <Link href='/'>
                  <a>Sales</a>
                </Link>
              </li>
              <li className='mt-2'>
                <Link href='/'>
                  <a>Women's Perfume</a>
                </Link>
              </li>
              <li className='mt-2'>
                <Link href='/'>
                  <a>Men's Cologne</a>
                </Link>
              </li>
              <li className='mt-2'>
                <Link href='/'>
                  <a>Unisex Fragrances</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-2xl'>Brands</h3>
            <ul>
              <li className='mt-2'>
                <Link href='/'>
                  <a>Dior</a>
                </Link>
              </li>
              <li className='mt-2'>
                <Link href='/'>
                  <a>Chanel</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-2xl'>About</h3>
            <ul>
              <li className='mt-2'>
                <Link href='/'>
                  <a>Company</a>
                </Link>
              </li>
              <li className='mt-2'>
                <Link href='/'>
                  <a>Location</a>
                </Link>
              </li>
              <li className='mt-2'>
                <Link href='/'>
                  <a>Contact us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

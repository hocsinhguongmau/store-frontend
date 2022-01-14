import React, { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(): ReactElement {
  return (
    <footer className='py-6 mt-12 lg:mt-24 bg-black text-gray-300'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div>
            <h3 className='font-bold text-2xl text-white'>Fragrances</h3>
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
            <h3 className='font-bold text-2xl text-white'>Brands</h3>
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
            <h3 className='font-bold text-2xl text-white'>About</h3>
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
          <div>
            <h3 className='font-bold text-2xl text-white'>Services</h3>
            <ul>
              <li className='mt-2'>
                <Link href='/'>
                  <a>Free ship</a>
                </Link>
              </li>
              <li className='mt-2'>
                <Link href='/'>
                  <a>90 days return</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

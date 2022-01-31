import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useQuery, UseQueryResult } from 'react-query'
import { getCommonBrands } from '@lib/queries/brand'

export default function Footer(): ReactElement | null {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<BrandType[] | undefined, Error> = useQuery<
    BrandType[] | undefined,
    Error
  >(['common_brands'], getCommonBrands)

  if (isLoading) return <div>Loading</div>

  if (isError) return <div>{error?.message}</div>
  if (!data) {
    return null
  } else {
    return (
      <footer className='py-6 bg-black text-gray-300 text-center md:text-left mt-12 lg:mt-24'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div>
              <h3 className='font-bold text-2xl text-white'>Fragrances</h3>
              <ul>
                <li className='mt-2'>
                  <Link href='/shop?discount=true'>
                    <a className='hover:text-white'>Sales</a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/shop?gender=women'>
                    <a className='hover:text-white'>Women's Perfume</a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/shop?gender=men'>
                    <a className='hover:text-white'>Men's Cologne</a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/shop?gender=unisex'>
                    <a className='hover:text-white'>Unisex Fragrances</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold text-2xl text-white'>Brands</h3>
              <ul>
                {data.map((brand) => (
                  <li className='mt-2' key={brand.slug}>
                    <Link href={`/${brand.slug}`}>
                      <a className='hover:text-white'>{brand.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='font-bold text-2xl text-white'>About</h3>
              <ul>
                <li className='mt-2'>
                  <Link href='/'>
                    <a className='hover:text-white'>Company</a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/'>
                    <a className='hover:text-white'>Location</a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/'>
                    <a className='hover:text-white'>Contact us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold text-2xl text-white'>Services</h3>
              <ul>
                <li className='mt-2'>
                  <Link href='/'>
                    <a className='hover:text-white'>Free ship</a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/'>
                    <a className='hover:text-white'>90 days return</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

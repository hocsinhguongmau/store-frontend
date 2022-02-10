import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useQuery, UseQueryResult } from 'react-query'
import { getCommonBrands } from '@lib/queries/brand'
import useLanguageStore from '@src/lib/store/languageStore'
import { headerContent } from '@src/lib/locale/header'

export default function Footer(): ReactElement | null {
  const language = useLanguageStore((state) => state.language)
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
              <h3 className='font-bold text-2xl text-white'>
                {headerContent[language].fragrances}
              </h3>
              <ul>
                <li className='mt-2'>
                  <Link href='/shop/page/1?discount=true'>
                    <a className='hover:text-white'>
                      {headerContent[language].sales}
                    </a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/shop/page/1?gender=women'>
                    <a className='hover:text-white'>
                      {headerContent[language].womenFragrance}
                    </a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/shop/page/1?gender=men'>
                    <a className='hover:text-white'>
                      {headerContent[language].menFragrance}
                    </a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/shop/page/1?gender=unisex'>
                    <a className='hover:text-white'>
                      {headerContent[language].unisexFragrance}
                    </a>
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
              <h3 className='font-bold text-2xl text-white'>
                {headerContent[language].about}
              </h3>
              <ul>
                <li className='mt-2'>
                  <Link href='/'>
                    <a className='hover:text-white'>
                      {headerContent[language].company}
                    </a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/'>
                    <a className='hover:text-white'>
                      {headerContent[language].location}
                    </a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/'>
                    <a className='hover:text-white'>
                      {headerContent[language].contact}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold text-2xl text-white'>
                {headerContent[language].service}
              </h3>
              <ul>
                <li className='mt-2'>
                  <Link href='/'>
                    <a className='hover:text-white'>
                      {headerContent[language].freeShip}
                    </a>
                  </Link>
                </li>
                <li className='mt-2'>
                  <Link href='/'>
                    <a className='hover:text-white'>
                      {headerContent[language].return}
                    </a>
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

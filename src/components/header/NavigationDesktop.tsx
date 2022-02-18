import { headerContent } from '@src/lib/locale/header'
import useLanguageStore from '@src/lib/store/languageStore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { SiHotjar } from 'react-icons/si'

const NavigationDesktop = () => {
  const language = useLanguageStore((state) => state.language)
  const { pathname } = useRouter()
  return (
    <ul className='flex-row gap-5 items-center hidden lg:flex navigation'>
      <li className='py-2'>
        <Link href='/'>
          <a className={`${pathname === '/' ? 'active' : ''}`}>
            {headerContent[language].home}
          </a>
        </Link>
      </li>
      <li className='py-2'>
        <Link href='/shop/page/1'>
          <a
            className={`${
              pathname === '/shop/page/[page_slug]' ? 'active' : ''
            }`}>
            {headerContent[language].shop}
          </a>
        </Link>
      </li>
      <li className='py-2'>
        <Link href='/shop/page/1?discount=true'>
          <a className='text-red-500 relative z-10 pr-4'>
            {headerContent[language].sales}
            <SiHotjar className='text-sm absolute top-0 right-0' />
          </a>
        </Link>
      </li>
      <li className='py-2'>
        <Link href='/brand'>
          <a className={`${pathname === '/brand' ? 'active' : ''}`}>
            {headerContent[language].brand}
          </a>
        </Link>
      </li>
      <li className='py-2'>
        <Link href='/about'>
          <a className={`${pathname === '/about' ? 'active' : ''}`}>
            {headerContent[language].about}
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default NavigationDesktop

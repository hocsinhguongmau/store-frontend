import { headerContent } from '@src/lib/locale/header'
import useLanguageStore from '@src/lib/store/languageStore'
import Link from 'next/link'
import React from 'react'

const NavigationDesktop = () => {
  const language = useLanguageStore((state) => state.language)
  return (
    <ul className='flex-row gap-5 items-center hidden lg:flex'>
      <li className='py-2'>
        <Link href='/'>
          <a className='hover:text-red-500'>{headerContent[language].home}</a>
        </Link>
      </li>
      <li className='py-2'>
        <Link href='/shop'>
          <a className='hover:text-red-500'>{headerContent[language].shop}</a>
        </Link>
      </li>
      <li className='py-2'>
        <Link href='/shop?discount=true'>
          <a className='hover:text-red-500'>{headerContent[language].sales}</a>
        </Link>
      </li>
      <li className='py-2'>
        <Link href='/brand'>
          <a className='hover:text-red-500'>{headerContent[language].brand}</a>
        </Link>
      </li>
      <li className='py-2'>
        <Link href='/'>
          <a className='hover:text-red-500'>{headerContent[language].about}</a>
        </Link>
      </li>
      <li className='py-2'>
        <Link href='/'>
          <a className='hover:text-red-500'>
            {headerContent[language].contact}
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default NavigationDesktop

import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import Profile from './Profile'
import { headerContent } from '@src/lib/locale/header'
import useLanguageStore from '@src/lib/store/languageStore'
import { SiHotjar } from 'react-icons/si'

const NavigationDesktop = () => {
  const language = useLanguageStore((state) => state.language)
  const [active, setActive] = useState<boolean>(false)
  return (
    <div className='lg:hidden relative z-50' data-testid='navigation-mobile'>
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
        <ul className='text-xl'>
          <li className='py-2'>
            <Link href='/'>
              <a onClick={() => setActive(false)}>
                {headerContent[language].home}
              </a>
            </Link>
          </li>
          <li className='py-2'>
            <Link href='/shop/page/1'>
              <a onClick={() => setActive(false)}>
                {headerContent[language].shop}
              </a>
            </Link>
          </li>
          <li className='py-2'>
            <Link href='/shop/page/1?discount=true'>
              <a
                onClick={() => setActive(false)}
                className='flex flex-row gap-1 text-red-500'>
                {headerContent[language].sales}
                <SiHotjar />
              </a>
            </Link>
          </li>
          <li className='py-2'>
            <Link href='/brand'>
              <a onClick={() => setActive(false)}>
                {headerContent[language].brand}
              </a>
            </Link>
          </li>
          <li className='py-2'>
            <Link href='/about'>
              <a onClick={() => setActive(false)}>
                {headerContent[language].about}
              </a>
            </Link>
          </li>
        </ul>
        <Profile />
      </div>
    </div>
  )
}

export default NavigationDesktop

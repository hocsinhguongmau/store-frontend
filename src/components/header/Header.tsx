import React, { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Profile from '@components/header/Profile'
import NavigationDesktop from '@components/header/NavigationDesktop'
import NavigationMobile from '@components/header/NavigationMobile'
import { useRouter } from 'next/router'

export default function Header(): ReactElement {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  return (
    <header
      className={`py-6 w-full z-50 mb-2 lg:mb-12 ${
        isHomePage
          ? 'md:absolute lg:top-0 lg:left-0 shadow-b shadow-gray-500 shadow-md md:shadow-none'
          : 'shadow-b shadow-gray-500 shadow-md'
      }`}>
      <div className='container flex flex-row justify-between'>
        <NavigationMobile />
        <div className='w-32'>
          <Link href='/'>
            <a className=''>
              <Image src='/images/logo.png' width={162} height={50} />
            </a>
          </Link>
        </div>
        <NavigationDesktop />
        <div className='hidden md:block'>
          <Profile />
        </div>
      </div>
    </header>
  )
}

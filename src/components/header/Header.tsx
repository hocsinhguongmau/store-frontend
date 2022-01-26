import React, { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Profile from '@components/header/Profile'
import NavigationDesktop from '@components/header/NavigationDesktop'
import NavigationMobile from '@components/header/NavigationMobile'

export default function Header(): ReactElement {
  return (
    <header className='py-6 w-full z-50 shadow mb-6 lg:mb-12'>
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
        <Profile />
      </div>
    </header>
  )
}

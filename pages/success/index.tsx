import { mainPageContent } from '@src/lib/locale/shop'
import useLanguageStore from '@src/lib/store/languageStore'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

function Success() {
  const language = useLanguageStore((state) => state.language)
  return (
    <div>
      <Head>
        <title>Odour</title>
      </Head>
      <div className='container text-center'>
        <AiOutlineCheckCircle className='mx-auto text-5xl text-green-500' />
        <p className='mt-4'>{mainPageContent[language].thankYou}</p>
        <p className='mt-4'>
          <Link href='/shop/page/1'>
            <a className='button inline-block'>
              {mainPageContent[language].continue}
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Success

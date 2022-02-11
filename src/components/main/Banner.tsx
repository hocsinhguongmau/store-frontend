import React, { Component } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import useLanguageStore from '@src/lib/store/languageStore'
import { mainPageContent } from '@src/lib/locale/shop'

const Banner = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const language = useLanguageStore((state) => state.language)
  return (
    <Slider {...settings} className='banner hidden md:block'>
      <div className='text-center'>
        <div style={{ backgroundColor: '#f4f4f4' }} className='relative'>
          <Link href='/shop/page/1?discount=true'>
            <a>
              <div className='absolute top-0 left-0 text-center z-10 w-full h-full flex flex-col justify-center mt-4 lg:mt-10'>
                <div>
                  <h2 className='text-2xl lg:text-3xl'>
                    {mainPageContent[language].newYear}
                  </h2>
                  <h2 className='text-3xl lg:text-4xl font-bold mt-1 lg:mt-2'>
                    {mainPageContent[language].off}
                  </h2>
                  <h2 className='text-xl lg:text-2xl mt-1 lg:mt-4'>
                    {mainPageContent[language].freeShip}
                  </h2>
                </div>
              </div>
              <Image
                width={1200}
                height={450}
                src='/images/banner-1.jpg'
                alt='banner'
              />
            </a>
          </Link>
        </div>
      </div>
      <div className='text-center'>
        <div style={{ backgroundColor: '#fff' }} className='relative'>
          <div className='absolute top-0 left-0 text-center z-10 w-full h-full flex flex-col justify-center'>
            <div className='uppercase mt-8'>
              <h2 className='text-lg'> {mainPageContent[language].diverse}</h2>
              <h2 className='text-2xl lg:text-4xl mt-1'>
                {mainPageContent[language].perfumes}
              </h2>
              <h2 className='text-lg mt-1'>
                {mainPageContent[language].topBrand}
              </h2>
              <Link href='/shop/page/1'>
                <a className='button mt-2 lg:mt-4 inline-block'>
                  {mainPageContent[language].shopNow}
                </a>
              </Link>
            </div>
          </div>
          <Image
            width={1200}
            height={450}
            src='/images/banner-2.jpg'
            alt='banner'
          />
        </div>
      </div>
    </Slider>
  )
}

export default Banner

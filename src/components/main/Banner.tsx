import React, { Component } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'

const Banner = () => {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      <div className='bg-black text-center'>
        <Image
          width={1035}
          height={340}
          src='/images/banner1.jpeg'
          alt='banner'
        />
      </div>
      <div className='bg-black text-center'>
        <Image
          width={1035}
          height={340}
          src='/images/banner2.jpeg'
          alt='banner'
        />
      </div>
    </Slider>
  )
}

export default Banner

import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import ProductItem from './ProductItem'

type Props = {
  title: string
  href: string
  products: ProductType[]
}

const ListProducts = ({ title, href, products }: Props) => {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }
  return (
    <div className='container'>
      <h2 className='text-3xl text-center mt-14 pb-10 tracking-tight'>
        {title}
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </Slider>
      <div className='text-center'>
        <Link href={href}>
          <a className='button uppercase mt-14 inline-block'>View more</a>
        </Link>
      </div>
    </div>
  )
}

export default ListProducts

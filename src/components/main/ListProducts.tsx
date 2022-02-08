import Loading from '@components/Loading'
import useMainProducts from '@src/hooks/useMainProducts'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import ProductItem from './ProductItem'

type Props = {
  title: string
  href: string
  products: 'weekly_offer' | 'new_products' | 'best_selling'
}

const ListProducts = ({ title, href, products }: Props) => {
  const { isLoading, isError, error, data } = useMainProducts()

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return (
      <div>
        <p>{error?.message}</p>
      </div>
    )
  }
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
  if (data) {
    return (
      <div className='container'>
        <h2 className='text-2xl md:text-3xl text-center mt-8 lg:mt-14 pb-6 md:pb-10 tracking-tight font-bold'>
          {title}
        </h2>
        <Slider {...settings}>
          {data[products].map((product) => (
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
  } else {
    return (
      <div className='container text-center text-2xl font-bold'>
        No item found!
      </div>
    )
  }
}

export default ListProducts

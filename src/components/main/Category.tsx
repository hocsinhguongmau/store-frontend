import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <div>
      <h2 className='text-2xl md:text-3xl font-bold text-center mt-8 md:mt-16'>
        Explore our collections
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-0 mt-4 md:mt-8'>
        <div className='relative'>
          <Link href='/shop/page/1?gender=women'>
            <a>
              <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-60 z-10 hidden md:flex flex-col justify-center opacity-0 hover:opacity-100 transition-all duration-300'>
                <h2 className='text-3xl text-white font-bold px-8 capitalize'>
                  Explore Women <br /> Fragrances
                </h2>
              </div>
              <Image
                src='/images/women.jpg'
                width={600}
                height={300}
                layout='responsive'
              />
            </a>
          </Link>
        </div>
        <div>
          <div className='relative'>
            <Link href='/shop/page/1?gender=unisex'>
              <a>
                <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-60 z-10 hidden md:flex flex-col justify-center opacity-0 hover:opacity-100 transition-all duration-300 text-center'>
                  <h2 className='text-3xl text-white font-bold px-8 capitalize'>
                    Best Unisex <br /> Perfumes
                  </h2>
                </div>
                <Image
                  src='/images/unisex.jpg'
                  width={600}
                  height={300}
                  layout='responsive'
                />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className='relative'>
            <Link href='/shop/page/1?gender=men'>
              <a>
                <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-60 z-10 hidden md:flex flex-col justify-center opacity-0 hover:opacity-100 transition-all duration-300 text-right'>
                  <h2 className='text-3xl text-white font-bold px-8 capitalize'>
                    Top Men <br /> Cologne
                  </h2>
                </div>
                <Image
                  src='/images/men.jpg'
                  width={600}
                  height={300}
                  layout='responsive'
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category

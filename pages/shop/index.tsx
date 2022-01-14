import LeftNav from '@components/main/LeftNav'
import Link from 'next/link'
import React from 'react'
import Breadcrumbs from 'nextjs-breadcrumbs'
import ProductItem from '@components/main/ProductItem'
import Pagination from '@components/main/Pagination'

const Shop = () => {
  return (
    <div className='container flex'>
      <div className='h-screen sticky top-0'>
        <LeftNav />
      </div>
      <div className='w-full'>
        <Breadcrumbs
          containerClassName='breadcrumbs'
          listClassName='breadcrumbs__list'
          activeItemClassName='breadcrumbs__item--active'
          replaceCharacterList={[{ from: '.', to: ' ' }]}
        />
        <select>
          <option>Newest</option>
          <option>Best selling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <div className='grid grid-cols-4 gap-4'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <Pagination
          currentPage={1}
          numberOfPosts={5!}
          postsPerPage={8}
          maxPages={5}
          urlName={`shop`}
        />
      </div>
    </div>
  )
}

export default Shop

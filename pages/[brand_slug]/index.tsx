import LeftNav from '@components/main/LeftNav'
import React from 'react'
import ProductItem from '@components/main/ProductItem'
import Pagination from '@components/main/Pagination'
import BreadcrumbsComponent from '@components/main/Breadcrumbs'

const BrandDetail = () => {
  return (
    <div className='container mt-10'>
      <BreadcrumbsComponent />
      <h1 className='text-3xl font-bold no-underline mt-4'>Brand name</h1>
      <div className='lg:flex mt-4'>
        <div className='lg:h-screen lg:sticky lg:top-0'>
          <LeftNav brand={false} />
        </div>
        <div className='w-full'>
          <select className='outline-none mt-4 text-sm'>
            <option>Newest</option>
            <option>Best selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
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
    </div>
  )
}

export default BrandDetail

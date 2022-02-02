import LeftNav from '@components/sidebar/LeftNav'
import React from 'react'
import BreadcrumbsComponent from '@components/main/Breadcrumbs'
import { dehydrate, QueryClient, useQuery, UseQueryResult } from 'react-query'
import { GetServerSideProps } from 'next'
import SortBy from '@components/main/SortBy'
import { getAllProducts } from '@src/lib/queries/product'
import ShopProducts from '@components/main/ShopProducts'

const productsPerPage = 6
const page = 1

const Shop = () => {
  return (
    <div className='container'>
      <BreadcrumbsComponent />
      <h1 className='text-3xl font-bold no-underline mt-4'>Perfume</h1>
      <div className='lg:flex mt-4'>
        <div className='lg:h-screen lg:sticky lg:top-0'>
          <LeftNav />
        </div>
        <div className='w-full'>
          <SortBy />
          <ShopProducts page={page} productsPerPage={productsPerPage} />
        </div>
      </div>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const queryClient = new QueryClient()
//   let sort = query.order as string
//   let gender = query.gender as string
//   let discount = query.discount as string
//   let price = query.price as string[]
//   let brand = query.brand as string
//   if (sort === undefined) {
//     sort = ''
//   }
//   if (gender === undefined) {
//     gender = ''
//   }
//   if (discount === undefined) {
//     discount = 'false'
//   }
//   if (price === undefined) {
//     price = ['']
//   }
//   if (brand === undefined) {
//     brand = ''
//   }

//   await queryClient.prefetchQuery(
//     [
//       'all_products',
//       sort ? 'sort:' + sort : 'sort',
//       gender ? 'gender:' + gender : 'gender',
//       discount ? 'discount:' + discount : 'discount',
//       price ? 'price:' + price : 'price',
//       brand ? 'brand:' + brand : 'brand',
//       query.page_slug ? 'page:' + query.page_slug : 'page',
//     ],
//     () =>
//       getAllProducts(
//         sort,
//         gender,
//         discount,
//         price,
//         brand,
//         productsPerPage * page - productsPerPage,
//         productsPerPage * page,
//       ),
//   )

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }

export default Shop

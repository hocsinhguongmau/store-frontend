import LeftNav from '@components/sidebar/LeftNav'
import React from 'react'
import ProductItem from '@components/main/ProductItem'
import Pagination from '@components/main/Pagination'
import BreadcrumbsComponent from '@components/main/Breadcrumbs'
import { useQuery, UseQueryResult } from 'react-query'
import { getAllProducts } from '@src/lib/queries/product'
import Loading from '@components/Loading'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

const Shop = (props: shopPageProductsType) => {
  const router = useRouter()
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<shopPageProductsType | undefined, Error> = useQuery<
    shopPageProductsType | undefined,
    Error
  >(['all_products'], () => getAllProducts(), {
    initialData: props,
  })
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
  if (!data) {
    return (
      <div className='container text-center text-2xl font-bold'>
        No brand found!
      </div>
    )
  } else {
    const handleOrderProducts = (
      event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
      const params = event.target.value
      router.push({
        pathname: '/shop',
        query: { ...router.query, order: params },
      })
    }

    return (
      <div className='container'>
        <BreadcrumbsComponent />
        <h1 className='text-3xl font-bold no-underline mt-4'>Perfume</h1>
        <div className='lg:flex mt-4'>
          <div className='lg:h-screen lg:sticky lg:top-0'>
            <LeftNav
              brand={
                router.query.brand !== undefined && router.query.brand !== ''
              }
              gender={
                router.query.gender !== undefined && router.query.gender !== ''
              }
            />
          </div>
          <div className='w-full'>
            <select
              className='outline-none mt-4 lg:mt-0 text-sm'
              onChange={handleOrderProducts}>
              <option value=''>Newest</option>
              <option value='sell'>Best selling</option>
              <option value='price_asc'>Price: Low to High</option>
              <option value='price_desc'>Price: High to Low</option>
            </select>
            <div className='grid grid-cols-2 md:grid-cols-3  gap-4 mt-8'>
              {data.allProducts.products.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </div>
            {/* {numberOfPosts > postsPerPage ? ( */}
            <Pagination
              currentPage={1}
              numberOfPosts={5!}
              postsPerPage={12}
              maxPages={5}
              urlName={`shop`}
            />
            {/* ) : (
              ''
            )} */}
          </div>
        </div>
      </div>
    )
  }
}
export const getServerSideProps: GetServerSideProps = async () => {
  const allProducts = await getAllProducts()
  if (!allProducts) {
    return {
      notFound: true,
    }
  }
  return { props: { allProducts } }
}

export default Shop

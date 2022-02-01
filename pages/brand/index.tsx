import BreadcrumbsComponent from '@components/main/Breadcrumbs'
import Link from 'next/link'
import React, { useState } from 'react'
import { dehydrate, QueryClient, useQuery, UseQueryResult } from 'react-query'

import { getAllBrands } from '@lib/queries/brand'
import Loading from '@components/Loading'
import { GetStaticProps } from 'next'
import { useBrand } from '@src/hooks/useBrand'

const Brand = () => {
  const { isLoading, isError, error, data } = useBrand()
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

  type GroupType = {
    slug: string
    title: string
  }

  if (!data) {
    return (
      <div className='container text-center text-2xl font-bold'>
        No brand found!
      </div>
    )
  } else {
    const brands = data.reduce((r: any, e: GroupType) => {
      let group = e.title[0]
      if (!r[group]) r[group] = { group, children: [e] }
      else r[group].children.push(e)
      return r
    }, {})
    const result = Object.values(brands)

    return (
      <div className='container'>
        <BreadcrumbsComponent />
        <h1 className='no-underline mt-4 text-xl md:text-2xl'>
          Perfume brands
        </h1>
        <div className='mt-8'>
          {result.map((alphabet: any) => (
            <div
              className='border-t border-solid border-gray-400 pb-8'
              key={alphabet.group}>
              <h2 className='text-2xl mt-8 text-center'>{alphabet.group}</h2>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8'>
                {alphabet.children.map((brand: GroupType) => (
                  <Link href={`/${brand.slug}`} key={brand.title}>
                    <a>
                      <span className='text-sm'>{brand.title}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('all_brands', getAllBrands)

  return { props: { dehydratedState: dehydrate(queryClient) } }
}

export default Brand

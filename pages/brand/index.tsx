import BreadcrumbsComponent from '@components/main/Breadcrumbs'
import Link from 'next/link'
import React, { useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { getAllBrands } from '@lib/queries/brand'
import Loading from '@components/Loading'
import { GetStaticProps } from 'next'

const Brand = (props: AllBrandsType) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<AllBrandsType | undefined, Error> = useQuery<
    AllBrandsType | undefined,
    Error
  >(['all_brands'], () => getAllBrands(), {
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
    return <div>co cc ne</div>
  } else {
    console.log(data)
    const brands = data.brands.reduce((r: any, e: any) => {
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
                {alphabet.children.map((brand: any) => (
                  <Link href={brand.slug} key={brand.title}>
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
  const brands = await getAllBrands()
  if (!brands) {
    return {
      notFound: true,
    }
  }
  return { props: { brands } }
}

export default Brand

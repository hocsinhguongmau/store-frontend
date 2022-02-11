import Loading from '@components/Loading'
import Breadcrumbs from '@components/main/Breadcrumbs'
import ProductItem from '@components/main/ProductItem'
import { serializers } from '@src/config/serializer'
import { useBrandDetail } from '@src/hooks/useBrandDetail'
import { mainPageContent } from '@src/lib/locale/shop'
import { getAllBrands, getBrandDetail } from '@src/lib/queries/brand'
import useLanguageStore from '@src/lib/store/languageStore'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { dehydrate, QueryClient } from 'react-query'

const BlockContent = require('@sanity/block-content-to-react')

const BrandDetail = () => {
  const language = useLanguageStore((state) => state.language)
  const router = useRouter()
  const brand_slug = router.query.brand_slug as string
  const { isLoading, isError, error, data } = useBrandDetail(brand_slug)

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
        {mainPageContent[language].noBrand}
      </div>
    )
  } else {
    return (
      <div>
        <Head>
          <title>{data.title}</title>
        </Head>
        <div className='container'>
          <Breadcrumbs />
          <h1 className='no-underline my-8'>{data.title}</h1>
          <BlockContent
            blocks={data.body[language]}
            imageOptions={{ w: 640, fit: 'max' }}
            projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_DATASET}
            serializers={serializers}
          />
          {data.products.length > 0 ? (
            <div>
              <h2 className='font-bold text-xl mt-8'>
                Products from {data.title}
              </h2>
              <div className='grid grid-cols-4 gap-4 mt-8'>
                {data.products.map((product, index) =>
                  index < 4 ? (
                    <ProductItem product={product} key={product.id} />
                  ) : (
                    ''
                  ),
                )}
              </div>
            </div>
          ) : null}
          <div className='text-center mt-4'>
            {data.products.length > 4 ? (
              <Link href={`/shop/page/1?brand=${brand_slug}`}>
                <a className='button inline-block'>
                  {mainPageContent[language].viewMore}
                </a>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient()
  const brand_slug = params?.brand_slug as string
  await queryClient.prefetchQuery(['brand_detail:' + brand_slug], () =>
    getBrandDetail(brand_slug),
  )

  return { props: { dehydratedState: dehydrate(queryClient) } }
}

export const getStaticPaths = async () => {
  const brands = await getAllBrands()
  const paths = brands.map((brand) => ({
    params: {
      brand_slug: brand.slug,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export default BrandDetail

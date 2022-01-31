import Loading from '@components/Loading'
import Banner from '@components/main/Banner'
import Category from '@components/main/Category'
import ListProducts from '@components/main/ListProducts'
import Services from '@components/main/Services'
import { getMainPageProducts } from '@src/lib/queries/product'
import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import { dehydrate, QueryClient, useQuery, UseQueryResult } from 'react-query'

const Home = () => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<mainPageProductsType | undefined, Error> = useQuery<
    mainPageProductsType | undefined,
    Error
  >(['main_products'], getMainPageProducts)
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
        No item found!
      </div>
    )
  } else {
    return (
      <div>
        <Head>
          <title>Odour</title>
        </Head>
        <Banner />

        <ListProducts
          title='Weekly offer'
          href='/shop?discount=true'
          products={data.weekly_offer}
        />
        <Category />
        <ListProducts
          title='New products'
          href='/shop?order=date'
          products={data.new_products}
        />
        <ListProducts
          title='Best selling'
          href='/shop?order=sale'
          products={data.best_selling}
        />
        <Services />
      </div>
    )
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('posts', getMainPageProducts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home

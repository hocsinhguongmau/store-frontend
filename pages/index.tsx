import Banner from '@components/main/Banner'
import Category from '@components/main/Category'
import ListProducts from '@components/main/ListProducts'
import Services from '@components/main/Services'
import { getMainPageProducts } from '@src/lib/queries/product'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { dehydrate, QueryClient } from 'react-query'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Odour</title>
      </Head>
      <Banner />
      <ListProducts
        title='Weekly offer'
        href='/shop/page/1?discount=true'
        products='weekly_offer'
      />
      <Category />
      <ListProducts
        title='New products'
        href='/shop/page/1?order=date'
        products='new_products'
      />

      <ListProducts
        title='Best selling'
        href='/shop/page/1?order=sale'
        products='best_selling'
      />

      <Services />
    </div>
  )
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

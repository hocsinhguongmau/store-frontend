import Banner from '@components/main/Banner'
import Category from '@components/main/Category'
import ListProducts from '@components/main/ListProducts'
import Services from '@components/main/Services'
import { productPageContent } from '@src/lib/locale/product'
import { getMainPageProducts } from '@src/lib/queries/product'
import useLanguageStore from '@src/lib/store/languageStore'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { dehydrate, QueryClient } from 'react-query'

const Home = () => {
  const language = useLanguageStore((state) => state.language)
  return (
    <div>
      <Head>
        <title>Odour</title>
      </Head>
      <Banner />
      <ListProducts
        title={productPageContent[language].weekly}
        href='/shop/page/1?discount=true'
        products='weekly_offer'
      />
      <Category />
      <ListProducts
        title={productPageContent[language].new}
        href='/shop/page/1?order=date'
        products='new_products'
      />

      <ListProducts
        title={productPageContent[language].best}
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

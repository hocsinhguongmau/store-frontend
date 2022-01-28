import Loading from '@components/Loading'
import Banner from '@components/main/Banner'
import ListProducts from '@components/main/ListProducts'
import { getMainPageProducts } from '@src/lib/queries/product'
import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import { useQuery, UseQueryResult } from 'react-query'

const Home = (props: mainPageProductsType) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<mainPageProductsType | undefined, Error> = useQuery<
    mainPageProductsType | undefined,
    Error
  >(['main_products'], () => getMainPageProducts(), {
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
          products={data.mainProducts.weekly_offer}
        />
        <ListProducts
          title='New products'
          href='/shop?order=date'
          products={data.mainProducts.new_products}
        />
        <ListProducts
          title='Best selling'
          href='/shop?order=sale'
          products={data.mainProducts.best_selling}
        />
      </div>
    )
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const mainProducts = await getMainPageProducts()
  if (!mainProducts) {
    return {
      notFound: true,
    }
  }
  return { props: { mainProducts } }
}

export default Home

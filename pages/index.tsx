import Banner from '@components/main/Banner'
import ListProducts from '@components/main/ListProducts'
import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Odour</title>
      </Head>
      <Banner />
      <ListProducts title='Weekly offer' href='/shop?discount=true' />
      <ListProducts title='New products' href='/shop?order=date' />
      <ListProducts title='Best selling' href='/shop?order=sale' />
    </div>
  )
}

export default Home

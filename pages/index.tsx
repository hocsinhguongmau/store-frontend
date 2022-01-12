import Banner from '@components/main/Banner'
import ListProducts from '@components/main/ListProducts'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Odour</title>
      </Head>
      <Banner />
      <ListProducts title='Weekly offer' />
      <ListProducts title='Weekly offer' />
      <ListProducts title='Weekly offer' />
    </div>
  )
}

export default Home

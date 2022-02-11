import Breadcrumbs from '@components/main/Breadcrumbs'
import MapComponent from '@components/main/Map'
import useLanguageStore from '@src/lib/store/languageStore'
import Head from 'next/head'
import Link from 'next/link'

const About = () => {
  const language = useLanguageStore((state) => state.language)
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <div className='container'>
        <Breadcrumbs />
        <h2 className='no-underline mt-8 text-2xl font-bold' id='about'>
          About Us
        </h2>
        <p className='mt-4'>
          Welcome to Odour! We have a range of outstanding fragrances from
          exclusive brands, make-up and beauty products from A to Z. Inspiring
          content and the latest trends from the beauty industry are waiting to
          be discovered every day. We work extremely hard to offer you the best
          range of products on a daily basis. Find your joy of beauty moment on
          Odour!
        </p>
        <h2 className='no-underline mt-8 text-2xl font-bold' id='contact'>
          Contact Us
        </h2>
        <div className='mt-4 text-sm text-gray-600 leading-6'>
          <p>
            Email:{' '}
            <a href='mailto:thangnguyen24111990@gmail.com'>
              thangnguyen24111990@gmail.com
            </a>
          </p>
          <p>
            Github:{' '}
            <Link href='https://github.com/thang241190'>
              <a target='_blank'>https://github.com/thang241190</a>
            </Link>
          </p>
          <p>Phone: +358449158001</p>
          <p>Address: Vuolukiventie 9C Helsinki 00710</p>
        </div>
        <h2 className='no-underline mt-8 text-2xl font-bold' id='location'>
          Location
        </h2>
        <MapComponent />
      </div>
    </div>
  )
}

export default About

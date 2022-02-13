import Breadcrumbs from '@components/main/Breadcrumbs'
import MapComponent from '@components/main/Map'
import { userPageContent } from '@src/lib/locale/user'
import useLanguageStore from '@src/lib/store/languageStore'
import Head from 'next/head'
import Link from 'next/link'

const About = () => {
  const language = useLanguageStore((state) => state.language)
  return (
    <div>
      <Head>
        <title>Odour</title>
      </Head>
      <div className='container'>
        <Breadcrumbs />
        <h2 className='no-underline mt-8 text-2xl font-bold' id='about'>
          {userPageContent[language].about}
        </h2>
        <p className='mt-4'>{userPageContent[language].description}</p>
        <h2 className='no-underline mt-8 text-2xl font-bold' id='contact'>
          {userPageContent[language].contact}
        </h2>
        <div className='mt-4 text-sm text-gray-600 leading-6'>
          <p>
            {userPageContent[language].email}:{' '}
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
          <p> {userPageContent[language].phone}: +358449158001</p>
          <p>
            {' '}
            {userPageContent[language].address}: Vuolukiventie 9C Helsinki 00710
          </p>
        </div>
        <h2 className='no-underline mt-8 text-2xl font-bold' id='location'>
          {userPageContent[language].location}
        </h2>
        <MapComponent />
      </div>
    </div>
  )
}

export default About

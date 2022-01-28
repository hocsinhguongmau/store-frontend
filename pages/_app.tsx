import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Amplify from 'aws-amplify'
import config from '@src/aws-exports'
Amplify.configure({ ...config, ssr: true })
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'

import { I18n } from 'aws-amplify'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import 'react-toastify/dist/ReactToastify.css'

import '@styles/globals.scss'
import Layout from '@components/Layout'
import { useRouter } from 'next/router'
import useLanguageStore from '@src/lib/store/languageStore'

function MyApp({ Component, pageProps }: AppProps) {
  const state = useLanguageStore()
  const { locale } = useRouter()
  useEffect(() => {
    if (locale === 'en' || locale === 'fi' || locale === 'se') {
      state.setLanguage(locale)
    }
  }, [])

  I18n.setLanguage(state.language)
  const dict = {
    fi: {
      'Sign In': 'Kirjaudu Sisään',
      'Sign in': 'Kirjaudu sisään',
      'Create Account': 'Luo tili',
      Email: 'Sähköposti',
      Password: 'Salasana',
      'Confirm Password': 'Vahvista salasana',
      'Forgot your password?': 'Unohditko salasanasi?',
    },
    se: {
      'Sign In': 'Logga In',
      'Sign in': 'Logga in',
      'Create Account': 'Skapa konto',
      Email: 'E-post',
      Password: 'Lösenord',
      'Confirm Password': 'Bekräfta lösenord',
      'Forgot your password?': 'Glömt ditt lösenord?',
    },
  }

  I18n.putVocabularies(dict)

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 24 * 1000 * 3600,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      }),
  )
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <ReactQueryDevtools initialIsOpen={false} />
        <NextNProgress
          color='#29D'
          startPosition={0.3}
          height={5}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position='bottom-right'
        hideProgressBar={true}
        autoClose={3000}
        closeOnClick
      />
    </QueryClientProvider>
  )
}
export default MyApp

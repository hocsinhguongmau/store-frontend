import { useState } from 'react'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Amplify from 'aws-amplify'
import config from '../src/aws-exports'
Amplify.configure({ ...config, ssr: true })
import NextNProgress from 'nextjs-progressbar'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'nextjs-breadcrumbs/dist/index.css'

import '@styles/globals.scss'
import Layout from '@components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
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
          // stopDelayMs={200}
          height={5}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
export default MyApp

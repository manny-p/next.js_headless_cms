import {AppWrapper} from '../src/context/state'
import '@/styles/globals.css'
import '@/styles/nprogress.css'
import {ChakraProvider} from '@chakra-ui/react'
import dynamic from 'next/dynamic'


const TopProgressBar = dynamic(
    () => import('@/components/TopProgressBar'),
    {ssr: false}
)

export default function MyApp({Component, pageProps}) {
  return (
      <AppWrapper>
        <ChakraProvider>
          <TopProgressBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </AppWrapper>
  )
}


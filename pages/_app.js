import {AppProvider} from '/src/context/state'
import {ChakraProvider} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import '@/styles/globals.css'
import '@/styles/nprogress.css'

const TopProgressBar = dynamic(
    () => import('@/components/TopProgressBar'),
    {ssr: false}
)

export default function MyApp({Component, pageProps}) {
  return (
      <AppProvider>
        <ChakraProvider>
          <TopProgressBar/>
          <Component {...pageProps} />
        </ChakraProvider>
      </AppProvider>

  )
}


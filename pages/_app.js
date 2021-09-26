import {AppWrapper} from '../src/context/state'
import '@/styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'

function MyApp({Component, pageProps}) {
    return (
        <AppWrapper>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </AppWrapper>
    )
}

export default MyApp
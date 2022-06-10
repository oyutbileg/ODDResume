import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import theme from "../styles/theme"
import { Footer, Navigation } from 'src/components'

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Navigation />
    <Component {...pageProps} />
    <Footer />
  </ChakraProvider>
}

export default MyApp
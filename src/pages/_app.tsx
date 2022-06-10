import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import theme from "../styles/theme"
import Navigation from '../components/Navigation/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Navigation />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp

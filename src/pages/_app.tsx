import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from 'src/contexts/auth'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script';
import type { AppProps } from 'next/app'
// Styles
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"
import "animate.css"
import '../styles/globals.css'
import '../template/css/bootstrap.min.css'
import '../template/css/style.css'
import '../template/lib/animate/animate.css'
import '../template/lib/animate/animate.min.css'

import theme from "../styles/theme"
import { useRouter } from 'next/router'
import auth from 'src/services/auth'


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
  if (typeof window !== 'undefined') {
    const token = auth.hasToken();
    if (window.location.pathname !== '/' && !token) {
      router.replace('/')
    } else if (window.location.pathname === '/' && token) {
      router.replace('/home')
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          zIndex: 99999999,
        }}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#fff',
            color: '#000',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </ChakraProvider>
  )
}

export default MyApp

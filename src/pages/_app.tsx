import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from 'src/contexts/auth'
import { Toaster } from 'react-hot-toast'
import type { AppProps } from 'next/app'
// Styles
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"
import "animate.css"
import '../styles/globals.css'
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
      router.replace('/team')
    }
  }

  return <>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
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
  </>
}

export default MyApp

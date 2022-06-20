import React from 'react'
import { Container } from '@chakra-ui/react'
import { Footer, ScrollTop } from 'src/components'

const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Container maxW="container.md">
      {children}
      <Footer />
      <ScrollTop />
    </Container>
  )
}

export default AppLayout

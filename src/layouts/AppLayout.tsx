import React from 'react'
import { Container } from '@chakra-ui/react'

const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Container maxW="container.lg">
      {children}
    </Container>
  )
}

export default AppLayout

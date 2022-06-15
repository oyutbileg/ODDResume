import React from 'react'
import { Container } from '@chakra-ui/react'

const AuthLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default AuthLayout

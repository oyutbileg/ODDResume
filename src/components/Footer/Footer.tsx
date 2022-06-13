import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'

const Footer: React.FC = () => {
  return (
    <Box mt={20}>
      <Flex justifyContent="center" alignItems="center" p={5}>
        Made with ❤️ by Outsourcing Team
      </Flex>
    </Box>
  )
}

export default Footer

import { Box, Button } from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Custom404: NextPage = () => {
  const router = useRouter()
  const handleBack = () => {
    router.replace('/')
  }
  return (
    <Box w='full' h='500' display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={2}>
      <Image height='300' width='300' src='/custom_404.png' objectFit="cover" alt='Not Found' />
      <Button onClick={handleBack} bg='red' _hover={{ bg: 'red' }} color='white'>Буцах</Button>
    </Box>
  )
}

export default Custom404

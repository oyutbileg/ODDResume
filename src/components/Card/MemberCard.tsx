import React from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/layout'
import { Stack, useColorModeValue, Avatar } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { User } from 'src/services/app/types'

const MemberCard: React.FC<{ data: User }> = ({ data }) => {
  const router = useRouter()
  const { first_name, last_name, position, portfolio_id, photo } = data
  return (
    <Flex justifyContent='space-between' flexDirection='column'
      rounded='lg' boxShadow='lg'
      bg={useColorModeValue('white', 'gray.700')}
      _hover={{ boxShadow: useColorModeValue('1px 1px 3px 2px #d2d2d2', '1px 1px 5px 2px #fff') }}>
      <Box flexGrow={1} p='4'>
        <Stack spacing={2} direction='column' align="center" onClick={() => router.push(`/portfolio/${portfolio_id}`)} _hover={{ cursor: 'pointer' }}>
          <Avatar size='2xl' name={`${first_name} ${last_name}`} src={photo ? `${process.env.NEXT_PUBLIC_GET_URL}/${photo}` : ''} />
          <Box textAlign='center'>
            <Heading size={['xs', 'sm']} fontSize='50px'>
              {first_name}
            </Heading>
            <Heading size={['xs', 'sm']} fontSize='50px'>
              {last_name}
            </Heading>
            <Text color={'gray.500'} noOfLines={1} fontSize={'0.7rem'}>{position}</Text>
          </Box>
        </Stack>
      </Box>
    </Flex>
  )
}

export default MemberCard;

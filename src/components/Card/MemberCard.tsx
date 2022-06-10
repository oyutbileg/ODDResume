import React from 'react'
import { Box, Divider, Flex, Text, Heading } from '@chakra-ui/layout'
import { Stack, useColorModeValue, Avatar } from '@chakra-ui/react'
type Link = {
  link: string
  icon: React.ReactNode
}
type Props = {
  first_name?: string
  last_name?: string
  position?: string
  photo?: string
}

const MemberCard: React.FC<Props> = ({ first_name, last_name, position, photo }) => {
  return (
    <Flex justifyContent='space-between' flexDirection='column'
      rounded='lg' boxShadow='lg'
      bg={useColorModeValue('white', 'gray.700')}
      _hover={{ boxShadow: useColorModeValue('1px 1px 3px 2px #d2d2d2', '1px 1px 5px 2px #fff') }}>
      <Box flexGrow={1} p='4'>
        <Stack spacing={2} direction='column' align="center">
          <Avatar size='2xl' name={`${first_name} ${last_name}`} src='https://bit.ly/broken-link' />
          <Box textAlign='center'>
            <Heading size={['md', 'lg']} fontSize='50px'>
              {first_name}
            </Heading>
            <Text fontSize={['1xl', '2xl']}>{last_name}</Text>
            <Text noOfLines={1} fontSize={['xl', '1xl']}>{position}</Text>
          </Box>
        </Stack>
      </Box>
    </Flex>
  )
}

export default MemberCard;

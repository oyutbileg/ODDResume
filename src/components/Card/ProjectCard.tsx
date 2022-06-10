import React from 'react'
// Components
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Stack, useColorModeValue, Link, Heading } from '@chakra-ui/react'
// Icons
import { HiExternalLink } from 'react-icons/hi'
import { Project } from 'src/services/app/types'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa'
// Types
type Link = {
  link: string
  icon: any
}
type Props = {
  data: Project
}

const ProjectCard: React.FC<Props> = ({ data }) => {
  return (
    <Flex justifyContent='space-between' flexDirection='column'
      rounded='lg' boxShadow='lg'
      bg={useColorModeValue('white', 'gray.700')}
      _hover={{ boxShadow: useColorModeValue('1px 1px 3px 2px #d2d2d2', '1px 1px 5px 2px #fff') }}>
      <Box flexGrow={1} p='4'>
        <Heading as='h3' size='lg'>{data.project_name}</Heading>
        <Text fontSize='0.9rem'>{data.description}</Text>
      </Box>
      <Divider />
      <Box px={4} py={2}>
        <Stack direction='row'>
          {data.web_url && <Link isExternal href={data.web_url}><HiExternalLink size='30px' /></Link>}
          {data.appstore_url &&
            <Link isExternal href={data.appstore_url}>
              <Box _hover={{ color: "blue.400" }}>
                <FaAppStoreIos size="30px" />
              </Box>
            </Link>
          }
          {data.playstore_url &&
            <Link isExternal href={data.playstore_url}>
              <Box _hover={{ color: "gray.500" }}>
                <FaGooglePlay size="30px" />
              </Box></Link>
          }
        </Stack>
      </Box>
    </Flex>
  )
}

export default ProjectCard;

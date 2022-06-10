import React from 'react'
// Components
import {
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Text
} from '@chakra-ui/react'
import { FaMoon, FaSun, FaHamburger, FaWindowClose } from 'react-icons/fa'

const Navigation: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  return (
    <>
      <Flex alignItems={'center'} justifyContent={'space-between'} px={5} py={3}>
        <IconButton
          fontSize='lg'
          size={'md'}
          variant='ghost'
          color='current'
          icon={isOpen ? <FaWindowClose /> : <FaHamburger />}
          aria-label={'Open Menu'}
          display={['flex', 'flex', 'none']}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'/'}
          >
            <Text fontWeight='extrabold' fontSize="2xl">{'Mobicom'}</Text>
          </Link>
        </HStack>
        <Flex alignItems={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            </HStack>
          </HStack>
          <IconButton
            size='md'
            fontSize='lg'
            variant='ghost'
            color='current'
            marginLeft='2'
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${text} mode`}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Navigation

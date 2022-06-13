import React from 'react'
// Components
import {
  Flex,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
  useColorMode,
  Text
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

type Props = {
  title: any,
  href: string
}

const NavLink: React.FC<Props> = ({ title, href }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}
  >
    {title}
  </Link>
)

const Navigation: React.FC<{ additionalMenu?: boolean }> = ({ additionalMenu = false }) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  return (
    <>
      <Flex alignItems={'center'} justifyContent={'space-between'} px={5} py={3}>
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
          {additionalMenu && <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {/* <NavLink key={"Skills"} title={'Skills'} href={'#skills'} /> */}
              <NavLink key={"Projects"} title={'Projects'} href={'#projects'} />
            </HStack>
          </HStack>}
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

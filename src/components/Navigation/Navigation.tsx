import React, { useEffect } from 'react'
// Components
import {
  Flex,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
  useColorMode,
  Text,
  Image
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'
import { useAuth } from 'src/contexts/auth'
import { useRouter } from 'next/router'
import logo from 'public/logo.png';

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
  const { setColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  const [, dispatchUser] = useAuth()
  const router = useRouter()

  const handleSignOut = () => {
    dispatchUser({ type: 'SIGN_OUT' })
    router.replace('/')
  }

  useEffect(() => {
    setColorMode('dark');
  }, []);

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
            <Image
                objectFit="cover"
                boxSize={{ sm: "50px", md: "50px" }}
                alt="logo"
                src={logo.src}
                fallbackSrc='https://via.placeholder.com/250'
                style={{
                  objectFit:"contain"
                }}
              />
          </Link>
        </HStack>
        <Flex alignItems={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            <Link
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
              href={'/home'}
            >
              <Text fontWeight='extrabold' fontSize="2xl">{'Home'}</Text>
            </Link>
          </HStack>
          <HStack spacing={8} alignItems={'center'}>
            <Link
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
              href={'/team'}
            >
              <Text fontWeight='extrabold' fontSize="2xl">{'Team'}</Text>
            </Link>
          </HStack>
          <HStack spacing={8} alignItems={'center'}>
            <Link
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
              href={'/about'}
            >
              <Text fontWeight='extrabold' fontSize="2xl">{'About'}</Text>
            </Link>
          </HStack>
        </Flex>
        
        
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
          <IconButton
            size='md'
            fontSize='lg'
            variant='ghost'
            color='current'
            marginLeft='2'
            onClick={handleSignOut}
            icon={<IoIosLogOut />}
            aria-label={`SignOut`}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Navigation

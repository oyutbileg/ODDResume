import { Box, Button, FormLabel, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import AuthLayout from 'src/layouts/AuthLayout'
import { IoIosLogIn } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import auth from 'src/services/auth'
import { LoginInput } from 'src/services/auth/types'
import { useRequest } from 'ahooks'
import { useRouter } from 'next/router'
import { useAuth } from 'src/contexts/auth'
const Login: NextPage = () => {

  const router = useRouter()
  const [, dispatchUser] = useAuth()

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const form = useForm<LoginInput>({
    defaultValues: { site_password: '' },
    mode: 'onChange',
    resolver: yupResolver(auth.validation.login),
  })

  const loginAPI = useRequest(auth.login, {
    manual: true,
    onSuccess: async (res, [values]) => {
      console.log(values);
      auth.saveToken(res.token)
      dispatchUser({ type: 'SIGN_IN', user: (await auth.me()) })
      router.replace('/team')
    },
  })

  return (
    <AuthLayout>
      <Box h='500' display='flex' alignItems='center' justifyContent='center' width='full'>
        <form
          onSubmit={form.handleSubmit((val) => {
            loginAPI.run(val)
          })}
        >
          <FormLabel htmlFor='email'>Password</FormLabel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='12345678'
              id='site_password'
              {...form.register('site_password')}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {form.formState.errors.site_password && <Text color='red'>{form.formState.errors.site_password?.message}</Text>}
          <Stack direction='row' spacing={4} align='center' justify='end'>
            <Button isLoading={loginAPI.loading} type="submit" rightIcon={<IoIosLogIn size={24} />} mt={3} bg='red' color='white' _hover={{
              bg: 'red'
            }}>
            </Button>
          </Stack>
        </form>
      </Box>
    </AuthLayout >
  )
}

export default Login

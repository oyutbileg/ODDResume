import * as yup from 'yup'
import { BaseRequest } from '..'
import { LoginInput, SysUser } from './types'

const tokenKey = 'token'

const auth = {
  saveToken: (token: string) => {
    if (typeof localStorage === 'undefined') {
      return
    }
    localStorage.setItem(tokenKey, token)
  },
  removeToken: () => {
    if (typeof localStorage === 'undefined') {
      return
    }
    localStorage.removeItem(tokenKey)
  },
  login: async (body: LoginInput): Promise<any> => {
    return await BaseRequest({
      url: `/auth/site/signin`,
      method: "POST",
      data: body,
    });
  },
  me: async (): Promise<SysUser> => {
    return await BaseRequest({
      url: `/auth/site/me`,
      method: "GET",
    }) as SysUser
  },
  hasToken: () => !!localStorage.getItem(tokenKey),
  getToken: () => localStorage.getItem(tokenKey),
  validation: {
    login: yup.object().shape({
      site_password: yup.string().required('Please enter password!'),
    }),
  },
}

export default auth

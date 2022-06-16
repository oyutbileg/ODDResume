import * as yup from 'yup'
import http from "../../services"
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
    return await http.post<any>(`/auth/site/signin`, {
      body
    })
  },
  me: async (): Promise<SysUser> => {
    return await http.get<SysUser>(`/auth/site/me`, {
      hasAuth: true
    })
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

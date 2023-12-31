import { BaseResponse } from '../misc/types'
import axios, { AxiosRequestConfig, CancelToken } from 'axios'
import i18n from '../utils/i18n'
import router from 'next/router'
import toast from 'react-hot-toast'
import auth from './auth'

const baseURL = process.env.NEXT_PUBLIC_API_URL

export interface IParams {
  [key: string]: string
}

export interface IHeader {
  [key: string]: any
}

export interface IBody {
  [key: string]: any
}

export interface IOption {
  body?: IBody
  hasAuth?: boolean
  headers?: IHeader
  params?: IParams
  cancelToken?: CancelToken
}

const getAuth = (hasAuth = false) =>
  hasAuth && auth.getToken()
    ? {
      authorization: `Bearer ${auth.getToken() !== undefined ? String(auth.getToken()).replaceAll('"', '') : String(auth.getToken())}`
    }
    : {}

const genHeader = (hasAuth = false, headers = {}) =>
  Object.assign(headers, getAuth(hasAuth), { Language: i18n.language })

const handleError = (err: any, reject: any) => {
  if (err && err?.response?.status === 401) {
    auth.removeToken()
    toast.error('Oops, maybe you have to login!.')
    router.replace('/')
    return reject(err.response?.data || 'Oops, maybe you have to login!.')
  }

  if (err && err.response && err.response.data) {
    return reject(err.response.data)
  }
  return reject({ message: 'Network problem, please try again!' })
}

const request = async <T,>(options: AxiosRequestConfig): Promise<any> => {
  return await new Promise<BaseResponse<T>>((resolve, reject) => {
    axios
      .request<BaseResponse<T>>({
        baseURL,
        ...options,
      })
      .then((resp) => {
        resolve(resp.data)
      })
      .catch((err) => handleError(err, reject))
  })
}

const http = {
  get: async <T,>(url: string, options?: IOption): Promise<T> => {
    return await request<T>({
      method: 'GET',
      url,
      headers: genHeader(options?.hasAuth, options?.headers) as any,
      params: options?.params,
      cancelToken: options?.cancelToken,
    }).then((data) => {
      return data.body
    })
  },
  post: async <T,>(url: string, options?: IOption): Promise<T> => {
    return await request<T>({
      method: 'POST',
      url,
      headers: genHeader(options?.hasAuth, options?.headers) as any,
      data: options?.body,
      cancelToken: options?.cancelToken,
    }).then((data) => data.body)
  },
  put: async <T,>(url: string, options?: IOption): Promise<T> => {
    return await request<T>({
      method: 'PUT',
      url,
      headers: genHeader(options?.hasAuth, options?.headers) as any,
      data: options?.body,
      cancelToken: options?.cancelToken,
    }).then((data) => data.body)
  },
  del: async <T,>(url: string, options?: IOption): Promise<T> => {
    return await request<T>({
      method: 'DELETE',
      url,
      headers: genHeader(options?.hasAuth, options?.headers) as any,
      data: options?.body,
      cancelToken: options?.cancelToken,
    }).then((data) => data.body)
  },
  cancelToken: axios.CancelToken.source(),
}

export default http

export interface SysUser {
  token: string | undefined
  data?: {
    isLoggin: boolean
  }
}

export interface LoginInput {
  site_password: string
}

import React from 'react'
import { useRequest } from 'ahooks'
import { Loader } from 'src/components'
import { SysUser } from 'src/services/auth/types'
import auth from 'src/services/auth'

export const defaultUser: SysUser = {
  token: undefined,
  data: undefined
}

export type Action = { type: 'SIGN_OUT' } | { type: 'SIGN_IN'; user: SysUser }
type Type = [SysUser, (action: Action) => void]

const AuthContext = React.createContext<Type>([
  defaultUser,
  () => { /* TODO document why this arrow function is empty */ },
])

const reducer: (state: SysUser, action: Action) => SysUser = (state: SysUser, action: Action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return action.user
    case 'SIGN_OUT':
      auth.removeToken()
      return defaultUser
    default:
      return state
  }
}

interface AuthProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultUser)
  const { loading } = useRequest(auth.me, {
    onSuccess: (result) => {
      dispatch({ type: 'SIGN_IN', user: result })
    },
  })

  return <AuthContext.Provider value={[state, dispatch]}>
    <Loader loading={loading}>{children}</Loader>
  </AuthContext.Provider>
}

export const useAuth: () => Type = () => React.useContext<Type>(AuthContext)

import { useBoolean } from 'ahooks'
import React, { FC, useEffect } from 'react'
import { Loader } from 'src/components'
import router from 'next/router'
import { useAuth } from 'src/contexts/auth'
import auth from 'src/services/auth'

const RequireAuth: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state] = useAuth()
  const [loading, setLoading] = useBoolean()

  useEffect(() => {
    const checkAuth = async (redirectPath: any) => {
      const isAuth = redirectPath.pathname.startsWith('/auth')
      const hasToken = auth.hasToken()
      setLoading.setTrue()
      if (!isAuth && !hasToken) {
        router.push('/')
      } else if (isAuth && hasToken) {
        router.replace('/')
      }
      setLoading.setFalse()
    }
    checkAuth(router)
  }, [setLoading])

  return (
    <Loader loading={loading || !state.data?.isLoggin}>{children}</Loader>
  )
}

export default RequireAuth

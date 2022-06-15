import type { NextPage } from 'next'
import { Header, Navigation } from 'src/components'
import { MemberList, RequireAuth } from 'src/widgets'
import AppLayout from '../layouts/AppLayout'
const Team: NextPage = () => {

  return (
    <RequireAuth>
      <Navigation />
      <AppLayout>
        <Header />
        <MemberList />
      </AppLayout>
    </RequireAuth>
  )
}

export default Team

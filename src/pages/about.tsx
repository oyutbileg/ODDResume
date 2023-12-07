import type { NextPage } from 'next'
import { Header, Navigation } from 'src/components'
import { MemberList, RequireAuth } from 'src/widgets'
import AppLayout from '../layouts/AppLayout'
const About: NextPage = () => {

  return (
    <RequireAuth>
      <Navigation />
      <AppLayout>
        <h1>About</h1>
      </AppLayout>
    </RequireAuth>
  )
}

export default About

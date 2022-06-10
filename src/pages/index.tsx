import type { NextPage } from 'next'
import { Header, Navigation, ScrollTop } from '../components'
import AppLayout from '../layouts/AppLayout'
import { MemberList } from 'src/widgets';

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <AppLayout>
        <Header />
        <MemberList />
      </AppLayout>
      <ScrollTop />
    </>
  )
}

export default Home

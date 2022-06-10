import { useRequest } from 'ahooks';
import type { NextPage } from 'next'
import { SimpleGrid, Box } from '@chakra-ui/react';
import { DynamicSkeleton, Header, MemberCard, ScrollTop } from '../components'
import AppLayout from '../layouts/AppLayout'
import app from '../services/app';
import { User } from '../services/app/types';

const Home: NextPage = () => {
  const { loading, data } = useRequest(() => app.list('page=1&limit=8&is_top=0&sort=-created_at'))

  return (
    <>
      <AppLayout>
        <Header />
        <Box my={10}>
          {
            loading && <DynamicSkeleton size={5} />
          }
          {!loading && data &&
            <SimpleGrid columns={[1, 2, 3]} spacing='10'>
              {data.list?.map((item: User, i: number) => {
                return <Box key={i}>
                  <MemberCard first_name={item.first_name} last_name={item.last_name} position={item.position} />
                </Box>
              })}
            </SimpleGrid>
          }
        </Box>
      </AppLayout>
      <ScrollTop />
    </>
  )
}

export default Home

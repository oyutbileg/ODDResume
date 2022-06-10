import React, { FC } from 'react'
import { useRequest } from 'ahooks'
import { SimpleGrid, Box } from '@chakra-ui/react';
import { DynamicSkeleton, MemberCard } from '../../components'
import { User } from 'src/services/app/types';
import app from 'src/services/app';

const MemberList: FC<{}> = () => {
  const { loading, data } = useRequest(() => app.list('page=1&limit=8&is_top=0&sort=-created_at'))

  return (
    <Box my={10}>
      {
        loading && <DynamicSkeleton size={5} />
      }
      {!loading && data &&
        <SimpleGrid columns={[1, 2, 3]} spacing='10'>
          {data.list?.map((item: User, i: number) => {
            return <Box key={i}>
              <MemberCard data={item} />
            </Box>
          })}
        </SimpleGrid>
      }
    </Box>
  )
}

export default MemberList

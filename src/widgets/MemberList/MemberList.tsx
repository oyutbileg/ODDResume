import React, { FC } from 'react'
import { useInfiniteScroll } from 'ahooks'
import { SimpleGrid, Box } from '@chakra-ui/react';
import { DynamicSkeleton, InfinitePagination, MemberCard } from 'src/components'
import { User } from 'src/services/app/types';
import app from 'src/services/app';
const PAGE_LIMIT = 100
const MemberList: FC<{type: String}> = (type) => {

  const { data, loading, loadMore, loadingMore } = useInfiniteScroll((d) => {
    const page = d ? Math.ceil(d.list.length / PAGE_LIMIT) + 1 : 1
    return app.list(`page=${page}&limit=${PAGE_LIMIT}&is_top=0&sort=list_order`)
  })

  const hasMore = data && data.list.length < data.total

  return (
    type.type === "home" ? 
    <Box my={10} display="flex" flexDirection="row" flexWrap="nowrap" justifyContent="center" overflowX="auto">
    <React.Fragment>
      {loading && <DynamicSkeleton size={3} />}
      {!loading && data && data.list?.map((item: User, i: number) => (
        <Box key={i} mx={2} my={2}>
          <MemberCard data={item} />
        </Box>
      ))}
      {hasMore && <InfinitePagination loading={loadingMore} loadMore={loadMore} />}
    </React.Fragment>
  </Box>
    : 
    <Box my={10}>
      <React.Fragment>
        {loading && <DynamicSkeleton size={3} />}
        {!loading && data &&
          <SimpleGrid columns={[1, 2, 4]} spacing='10'>
            {data.list?.map((item: User, i: number) => {
              return <Box key={i}>
                <MemberCard data={item} />
              </Box>
            })}
          </SimpleGrid>
        }
        {hasMore && <InfinitePagination loading={loadingMore} loadMore={loadMore} />}
      </React.Fragment>
    </Box>
    
  )
}

export default MemberList

import React, { FC } from 'react'
import app from 'src/services/app'
import { GetStaticPaths, GetStaticProps } from 'next'
import AppLayout from 'src/layouts/AppLayout'
import { UserDetail } from 'src/services/app/types'
import { Avatar, Box, Flex } from '@chakra-ui/react'
import { Greeting, Navigation } from 'src/components'
import Projects from 'src/widgets/Projects/Projects'

interface Props {
  result: UserDetail
}

const Slug: FC<Props> = ({ result }) => {
  return <>
    <Navigation additionalMenu />
    <AppLayout>
      <Flex justify="center" mt="10%" alignSelf="flex-start" direction={["column", null, "row"]} align="center" px={{ sm: "20px" }}>
        <Box flexGrow={1} flexShrink={0}>
          <Avatar size='2xl' name={`${result.first_name} ${result.last_name}`} src={`${process.env.NEXT_PUBLIC_GET_URL}/${result.photo}`} />
        </Box>
        <Box mt={[1, 0]} ml={{ md: 6 }}>
          <Greeting data={result} />
        </Box>
      </Flex>
      <Projects projects={result.projects ?? []} />
    </AppLayout>
  </>
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = (context.params as any).slug
  try {
    let res = await app.getProfile(slug)
    return {
      props: {
        result: res.data,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default Slug

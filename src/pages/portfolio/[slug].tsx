import React, { FC } from 'react'
import app from 'src/services/app'
import { GetStaticPaths, GetStaticProps } from 'next'
import AppLayout from 'src/layouts/AppLayout'
import { UserDetail } from 'src/services/app/types'
import { Box, Flex, Image } from '@chakra-ui/react'
import { Greeting, Navigation } from 'src/components'
import Projects from 'src/widgets/Projects/Projects'

interface Props {
  result: UserDetail
}

const Slug: FC<Props> = ({ result }) => {
  console.log(result);
  return <>
    <Navigation additionalMenu />
    <AppLayout>
      <Flex justify="center" mt="10%" alignSelf="flex-start" alignItems={{ sm: 'center', md: 'flex-start' }} direction={["column", null, "row"]} align="center" px={{ sm: "20px" }}>
        <Box>
          <Image
            rounded='full'
            objectFit="cover"
            boxSize={{ sm: "150px", md: "250px" }}
            alt={`${result.first_name} ${result.last_name}`}
            src={`${process.env.NEXT_PUBLIC_GET_URL}/${result.photo}`}
            fallbackSrc='https://via.placeholder.com/250'
          />
        </Box>
        <Box flex={1} mt={[1, 0]} ml={{ md: 6 }}>
          <Greeting data={result} />
        </Box>
      </Flex>
      {Array.isArray(result.projects) && result.projects.length > 0 && <Projects projects={result.projects} />}
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

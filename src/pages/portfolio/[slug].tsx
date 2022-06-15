import React, { FC, useEffect, useState } from 'react'
import app from 'src/services/app'
import AppLayout from 'src/layouts/AppLayout'
import { UserDetail } from 'src/services/app/types'
import { Box, Flex, Image } from '@chakra-ui/react'
import { Greeting, Loader, Navigation, NotFound } from 'src/components'
import Projects from 'src/widgets/Projects/Projects'
import { useRequest } from 'ahooks'
import { useRouter } from 'next/router'

const Portfolio: FC<{}> = () => {

  const [result, setResult] = useState<UserDetail>()

  const router = useRouter()

  const { loading, data } = useRequest(() => app.getPortfolio(router.query.slug as string), {
    onSuccess: (res) => {
      setResult(res.data)
    }
  });

  useEffect(() => {
    return () => {
      setResult(undefined)
    }
  }, [])

  return <>
    <Navigation additionalMenu />
    <Loader loading={loading}>
      {!loading && data ?
        <AppLayout>
          <Flex justify="center" mt="10%" alignSelf="flex-start" alignItems={{ sm: 'center', md: 'flex-start' }} direction={["column", null, "row"]} align="center" px={{ sm: "20px" }}>
            <Box>
              <Image
                rounded='full'
                objectFit="cover"
                boxSize={{ sm: "150px", md: "250px" }}
                alt={`${result?.first_name} ${result?.last_name}`}
                src={result?.photo ? `${process.env.NEXT_PUBLIC_GET_URL}/${result?.photo}` : `https://via.placeholder.com/250`}
                fallbackSrc='https://via.placeholder.com/250'
              />
            </Box>
            <Box flex={1} mt={[1, 0]} ml={{ md: 6 }}>
              {result && <Greeting data={result} />}
            </Box>
          </Flex>
          {Array.isArray(result?.projects) && result && result.projects.length > 0 && <Projects projects={result.projects} />}
        </AppLayout> : <NotFound />}
    </Loader>
  </>
}

export default Portfolio

import { Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { UserDetail } from 'src/services/app/types'

const Greeting: FC<{ data: UserDetail }> = ({ data }) => {
  return (
    <Box py={[1, null, 3]}>
      <Box>
        <Text className="animate__animated animate__bounceInLeft" align={["center", null, "left"]} fontSize={['3xl', '5xl']} fontWeight="bold" fontFamily="Poppins.100" mb={3}>{`Hello I'm ${data.first_name}`}</Text>
        <Text align="justify" fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
          {data.description}
        </Text>
        <Text align="justify" fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
          Experience: {data.experience} years
        </Text>
        <Text align="justify" fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
          Position: {data.position}
        </Text>
        <Text align="justify" fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
          Skills:  {data.skill_tags && typeof data.skill_tags === "string" && JSON.parse(data.skill_tags).join(", ")}
        </Text>
      </Box>
    </Box>
  )
}

export default Greeting

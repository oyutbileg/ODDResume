import { Box, Divider, HStack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { UserDetail } from 'src/services/app/types'

const Greeting: FC<{ data: UserDetail }> = ({ data }) => {
  return (
    <Box py={[1, null, 3]}>
      <Box>
        <Text className="animate__animated animate__bounceInLeft" align={["center", null, "left"]} fontSize={['3xl', '5xl']} fontWeight="bold" fontFamily="Poppins.100" mb={3}>{`Hello I'm ${data.first_name}`}</Text>
        <Text lineHeight='5' align="justify" fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
          {data.description}
        </Text>
        <Divider mt={3} />
        <HStack spacing='10px' align='start'>
          <Text align="left" fontWeight='bold' fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
            Experience:
          </Text>
          <Text align="left" fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
            {data.experience} years
          </Text>
        </HStack>
        <HStack spacing='10px' align='start'>
          <Text align="left" fontWeight='bold' fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
            Position:
          </Text>
          <Text align="left" fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
            {data.position}
          </Text>
        </HStack>
        <HStack spacing='10px' align='start'>
          <Text align="left" fontWeight='bold' fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
            Skills:
          </Text>
          <Text align="left" fontFamily="Poppins.100" className="animate__animated animate__fadeInRight">
            {data.skill_tags && typeof data.skill_tags === "string" && JSON.parse(data.skill_tags).join(", ")}
          </Text>
        </HStack>
      </Box>
    </Box>
  )
}

export default Greeting

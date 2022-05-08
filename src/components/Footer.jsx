import { Box, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <Stack direction="row" justifyContent="space-around" alignItems="center" bg="lemonchiffon" mt={20} py={10}>
      <Box>
        <Image src={require('../assets/logo.png')} height={100} />
        <Box width="60%" mt={5}>
          <Text>Shamrock Rd, Patricks Island,Caman Island</Text>
          <Text>Sunday-Thursday 11AM -10PM</Text>
          <Text>Friday-Saturday 11AM-12PM</Text>
          <Text>Phone :+1 345-929-8571</Text>
        </Box>
      </Box>
      <Stack direction="row" spacing={10}>
        <FaInstagram size={50} />
        <FaFacebook size={50} />
      </Stack>
    </Stack>
  )
}

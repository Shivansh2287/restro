import React from 'react'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'

const Info = () => {
  return (
    <Box m={5} fontSize={25} font>
      <hr />
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <h4 style={{ textAlign: 'left', fontWeight: 'bold' }}>BANCON CHEESBURGER</h4>
        <h4
          style={{
            fontWeight: 'bold'
          }}>
          {' '}
          KYD $16
        </h4>
      </Box>
      <Text fontSize={20} style={{ textAlign: 'left' }}>
        CAB, Patty, SWiss, baconm, tamonta , cheess , pepper, lomst, mayo
      </Text>
    </Box>
  )
}

export default function Orders() {
  return (
    <div>
      <Box
        m={10}
        style={{
          border: '2px solid #000',
          width: '40%',
          margin: 'auto',
          marginTop: '60px',
          marginBottom: '10px'
        }}>
        <Info />
        <Info />
        <Info />
        <Info />
      </Box>
      <Stack
        ml="55%"
        mb={50}
        mt={10}
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
        <Heading as="h2" mr={5}>
          Your Orders
        </Heading>
        <FaShoppingCart fontSize={30} />
      </Stack>
    </div>
  )
}

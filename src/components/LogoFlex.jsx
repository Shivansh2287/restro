import React from 'react'
import { Box } from '@chakra-ui/react'

export default function LogoFlex() {
  return (
    <Box
      style={{
        width: '30%',
        margin: 'auto',
        marginTop: '100px',
        marginBottom: '100px'
      }}>
      <img src={require('../assets/flex.png')} />
    </Box>
  )
}

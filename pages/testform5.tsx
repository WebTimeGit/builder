import React from 'react'
import { ChakraProvider, Button, Avatar, Box } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Button variant="solid" size="md" colorScheme="blue">
      Button text
    </Button>
    <Avatar />
    <Box />
  </ChakraProvider>
)

export default App

import React from 'react'
import { ChakraProvider, Button } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Button
      variant="solid"
      size="md"
      colorScheme="telegram"
      display="flex"
      backgroundColor="#ff4545"
      justifyContent="center"
      alignItems="center"
      fontWeight="bold"
      color="facebook.500"
    >
      text
    </Button>
  </ChakraProvider>
)

export default App

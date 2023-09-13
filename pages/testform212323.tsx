import React from 'react'
import { ChakraProvider, Button, Checkbox, Code } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Button variant="solid" size="md" colorScheme="blue">
      Button text
    </Button>
    <Checkbox isReadOnly>Label checkbox</Checkbox>
    <Code>Code value</Code>
  </ChakraProvider>
)

export default App

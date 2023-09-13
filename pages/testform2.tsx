import React from 'react'
import { ChakraProvider, Breadcrumb, Button, Checkbox } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Breadcrumb />
    <Button variant="solid" size="md">
      Button text
    </Button>
    <Checkbox isReadOnly>Label checkbox</Checkbox>
  </ChakraProvider>
)

export default App

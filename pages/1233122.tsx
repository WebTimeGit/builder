import React from 'react'
import {
  ChakraProvider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Alert>
      <AlertIcon />
      <AlertTitle mr={1} fontWeight="bold">
        Alert title
      </AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>
  </ChakraProvider>
)

export default App

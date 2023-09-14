import React from 'react'
import {
  ChakraProvider,
  Button,
  Box,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'

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
    <Box>
      <Button variant="solid" size="md">
        Button text
      </Button>
      <Center />
      <Alert>
        <AlertIcon />
        <AlertTitle mr={1} fontWeight="bold">
          Alert title
        </AlertTitle>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>
      <Alert>
        <AlertDescription>Alert description</AlertDescription>
        <AlertTitle mr={1} fontWeight="bold">
          Alert title
        </AlertTitle>
      </Alert>
    </Box>
  </ChakraProvider>
)

export default App

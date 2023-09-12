import React from 'react'
import {
  ChakraProvider,
  Button,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
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
    <Avatar />
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink>Lorem Ipsum</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>Lorem Ipsum</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>Lorem Ipsum</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </ChakraProvider>
)

export default App

import React from 'react'
import {
  ChakraProvider,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image
} from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Button variant="solid" size="md">
      Button text
    </Button>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink>Lorem Ipsum</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>Lorem Ipsum</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Image height="100px" width="100px" />
  </ChakraProvider>
)

export default App

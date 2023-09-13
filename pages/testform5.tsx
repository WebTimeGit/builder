import React from 'react'
import {
  ChakraProvider,
  Button,
  Checkbox,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Button variant="solid" size="md">
      Button text
    </Button>
    <Checkbox isReadOnly>Label checkbox</Checkbox>
    <Breadcrumb>
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

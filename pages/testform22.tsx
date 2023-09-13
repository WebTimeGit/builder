import React from 'react'
import {
  ChakraProvider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  AccordionIcon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Accordion>
      <AccordionItem>
        <AccordionButton>
          <Text>Text value</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text>Text value</Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
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

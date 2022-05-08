import { AddIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import React from 'react'
import { BsDash } from 'react-icons/bs'

function Info() {
  return (
    <ListItem
      fontSize={20}
      mt={2}
      mb={2}
      style={{
        listStyle: 'none',
        padding: '10'
      }}>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Text>Fry Chicken</Text>
        <Text>8.00 KYD - 10.00 USD</Text>
        <Button ml={40} mr={5}>
          <BsDash />
        </Button>
        <Text>1</Text>
        <Button ml={5}>
          <AddIcon />
        </Button>
      </Stack>
    </ListItem>
  )
}

export default function Lists() {
  return (
    <>
      <Box ml="30%" mr="30%">
        <Heading mb={10} align="center">
          Menu
        </Heading>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem bg="lemonchiffon" mb={5}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize={25}>
                  Today's Special
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <UnorderedList ml={10}>
                <Info />
                <hr />
                <Info />
                <hr />
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem bg="lemonchiffon" mb={5}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize={25}>
                  Soup Of the Day
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <UnorderedList ml={10}>
                <Info />
                <hr />
                <Info />
                <hr />
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem bg="lemonchiffon" mb={5}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize={25}>
                  Burgers & Wraps
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <UnorderedList ml={10}>
                <Info />
                <hr />
                <Info />
                <hr />
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem bg="lemonchiffon" mb={5}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize={25}>
                  Jerk Special
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <UnorderedList ml={10}>
                <Info />
                <hr />
                <Info />
                <hr />
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem bg="lemonchiffon" mb={5}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize={25}>
                  Combo Special
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <UnorderedList ml={10}>
                <Info />
                <hr />
                <Info />
                <hr />
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  )
}

import { AddIcon } from "@chakra-ui/icons";
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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { BsDash } from "react-icons/bs";
import obj from "../data";

// import Context from "../context/Context";
import PopUP from "./Modal";

function Info() {
  useEffect(() => {
    console.log(obj);
  }, []);

  return (
    <>
      <ListItem
        fontSize={20}
        mt={2}
        mb={2}
        style={{
          listStyle: "none",
          padding: "10",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Text>Fry Chicken</Text>
          <Text>8.00 CI - 10.00 CI</Text>
          <Button>ADD +</Button>
        </Stack>
      </ListItem>
    </>
  );
}

export default function Lists() {
  return (
    <>
      <PopUP />
      <Box
        width={{ base: "100%", md: "50%", sm: "20%" }}
        p={5}
        style={{
          margin: "auto",
        }}
      >
        <Heading mb={10} align="center">
          Menu
        </Heading>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem bg="lemonchiffon" mb={5}>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize={{ sm: 20, md: 25 }}
                >
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
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize={{ sm: 20, md: 25 }}
                >
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
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize={{ sm: 20, md: 25 }}
                >
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
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize={{ sm: 20, md: 25 }}
                >
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
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize={{ sm: 20, md: 25 }}
                >
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
  );
}

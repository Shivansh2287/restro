import { AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { BsDash } from "react-icons/bs";
import obj from "../data";

import PopUP from "./Modal";

import useStore from "../store";

function Info({ name, price }) {
  const { setModal } = useStore();
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
          <Text>{name}</Text>
          <Text>{price}</Text>
          <Button
            onClick={() => {
              setModal(true);
            }}
          >
            ADD +
          </Button>
        </Stack>
      </ListItem>
    </>
  );
}

export default function Lists() {
  const { modal } = useStore();
  console.log(modal);
  return (
    <>
      {modal && <PopUP />}
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
          {obj.map((item, index) => {
            return (
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
                    {item.map((item, index) => {
                      return <Info name={item.name} price={item.price} />;
                    })}
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
    </>
  );
}

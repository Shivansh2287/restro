import { AddIcon } from "@chakra-ui/icons";
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  Text,
  Button,
  useDisclosure,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import { BsDash } from "react-icons/bs";
import useStore from "../store";

export default function PopUP() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems, addItem, removeItem } = useStore();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent background="rgba(255, 255, 255, 0.58)" mt="15%">
        <ModalHeader>Fry Chicken</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            my={5}
          >
            <Stack direction="row">
              <Text fontSize={{ xs: 10, md: 25 }}>Full</Text>
              <Text fontSize={{ xs: 20, md: 25 }}>$10</Text>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Button onClick={removeItem}>
                <BsDash />
              </Button>
              <Text>{cartItems}</Text>
              <Button onClick={addItem}>
                <AddIcon />
              </Button>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            my={5}
          >
            <Stack direction="row">
              <Text>Half</Text>
              <Text>$8</Text>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Button onClick={removeItem}>
                <BsDash />
              </Button>
              <Text>{cartItems}</Text>
              <Button onClick={addItem}>
                <AddIcon />
              </Button>
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Add to cart
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

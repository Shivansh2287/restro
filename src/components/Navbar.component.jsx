import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";

const NavbarX = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Stack
      as="nav"
      justifyContent="space-around"
      flexDirection="row"
      py={10}
      bg="#fff"
      color="black"
    >
      <Flex align="center" mr={5}>
        <Image src={logo} alt="logo" height={20} ml={30} />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        paddingX={5}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        opacity={0.7}
        fontSize={20}
        spacing={7}
        mt={{ base: 4, md: 0 }}
      >
        <Stack direction="row" spacing={8} alignItems="center">
          <Text>Menu</Text>
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>Order Online</Text>
          <Text>Catering</Text>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          alignItems="center"
        >
          <Text fontWeight="bold">+345-525-6453</Text>
          <Button
            variant="solid"
            color="#000"
            colorScheme="#000"
            style={{
              border: "2px solid #000",
            }}
          >
            Sign In
          </Button>
          <Button variant="outline" bg="#000" color="#fff" colorScheme="#000">
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NavbarX;

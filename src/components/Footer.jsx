import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      width={{ lg: "100%", md: "30%", sm: "20%" }}
      p={10}
      bg="lemonchiffon"
      mt={20}
      py={10}
    >
      <Box>
        <Image src={require("../assets/logo.png")} height={["10%", 10, 90]} />
        <Box width={["120%", 10, "70%"]} mt={5}>
          <Text>Shamrock Rd, Patricks Island,Caman Island</Text>
          <Text>Sunday-Thursday 11AM -10PM</Text>
          <Text>Friday-Saturday 11AM-12PM</Text>
          <Text>Phone :+1 345-929-8571</Text>
        </Box>
      </Box>
      <Stack direction="row" spacing={[5, 20, 10]} pl={["10%", 0, 0]}>
        <FaInstagram size={50} />
        <FaFacebook size={50} />
      </Stack>
    </Stack>
  );
}

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/down.png";
import img2 from "../assets/up.png";

export default function About() {
  return (
    <Box
      width={{ lg: "40%" }}
      p={10}
      style={{
        margin: "auto",
      }}
    >
      <Image src={img1} />
      <Heading alignItems="center" align="center" my={5}>
        About
      </Heading>
      <Text
        mb={5}
        style={{
          textAlign: "center",
          lineHeight: "1.5",
        }}
      >
        Lof a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to
        using 'Content here, content here', making it look like readable
        English. Many desktop publishing packages and web page editors now use
        Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        will uncover many web sites still in their infancy. Various versions
        have evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like). oertukehifskjfiuhf fyuif uisdfhuifiuf{" "}
      </Text>
      <Image src={img2} />
    </Box>
  );
}

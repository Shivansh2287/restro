import React from "react";
import { Box } from "@chakra-ui/react";

export default function LogoFlex() {
  return (
    <Box
      width={{ base: "100%", md: "30%", sm: "20%" }}
      p={10}
      style={{
        margin: "auto",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <img src={require("../assets/flex.png")} />
    </Box>
  );
}

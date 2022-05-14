import React from "react";
import { Box } from "@chakra-ui/react";

export default function LogoFlex() {
  return (
    <Box
      width="40%"
      p={10}
      style={{
        margin: "auto",
        marginTop: "50px",
        marginBottom: "100px",
      }}
    >
      <img src={require("../assets/flex.png")} />
    </Box>
  );
}

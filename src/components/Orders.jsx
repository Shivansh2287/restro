import React from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Info = () => {
  return (
    <Box m={5}>
      <hr />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ textAlign: "left", fontWeight: "bold" }}>
          BANCON CHEESBURGER
        </h4>
        <h4
          style={{
            fontWeight: "bold",
          }}
        >
          {" "}
          KYD $16
        </h4>
      </Box>
      <Text fontSize={{ sm: 20, md: 25 }} style={{ textAlign: "left" }}>
        CAB, Patty, SWiss, baconm, tamonta , cheess , pepper, lomst, mayo
      </Text>
    </Box>
  );
};

export default function Orders() {
  return (
    <div>
      <Box
        width={{ base: "100%", md: "50%", sm: "20%" }}
        fontSize={{ sm: 20, md: 25 }}
        style={{
          border: "2px solid #000",

          margin: "auto",
          marginTop: "60px",
          marginBottom: "10px",
        }}
      >
        <Info />
        <Info />
        <Info />
        <Info />
      </Box>
      <Stack
        ml={["40%", "40%", "50%", "40%"]}
        mb={50}
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <Heading as="h2" fontSize={{ sm: 20, md: 25 }} mr={5}>
          Your Orders
        </Heading>
        <FaShoppingCart fontSize={{ sm: 20, md: 25 }} />
      </Stack>
    </div>
  );
}

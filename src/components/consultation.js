import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";

export default function Consultation() {
  return (
    <Box maxW={["90%", "80%", "75%"]}  textAlign={"center"} mx={"auto"} bg={"#FFCE07"} borderRadius={"20px"} border={"1px solid black"} my={10}>
      <Text fontSize={"md"} mt={7} mb={2} fontWeight={"500"}>Is software important for your business?</Text>
      <Text fontSize={"4xl"}>Build it with Albatech</Text>
      <Button
        as={"a"}
        fontSize={"sm"}
        fontWeight="Bold"
        color={"black"}
        bg={"#FFCE3D"}
        border="1px solid black"
        borderRadius="50px"
        w="175px"
        h="53px"
        href={"#"}
        _hover={{
          bg: "#FFDD77",
          color: "#636669",
        }}
        my={7}
      >
        Consultation Now
      </Button>
    </Box>
  );
}

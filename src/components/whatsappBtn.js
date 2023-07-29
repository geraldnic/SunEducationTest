import { Box, Icon, Stack, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function WhatsappBtn() {
  return (
    <Box position={"fixed"} bottom={"8%"} right={"5%"} zIndex={1}>
      <Stack direction={"row"} align={"center"}>
        <Flex
          w={[14, 16, 20]}
          h={[14, 16, 20]}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={"#00D36F"}
          _hover={{
            bg: "#00DD74",
            cursor: "pointer",
          }}
        >
          <Icon as={BsWhatsapp} color={"white"} w={[7, 8, 10]} h={[7, 8, 10]} />
        </Flex>
      </Stack>
    </Box>
  );
}

export default WhatsappBtn;

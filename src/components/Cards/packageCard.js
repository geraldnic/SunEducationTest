import React from "react";
import { Box, Heading, Text, Stack, Flex, Image } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

function packageCard(props) {
  return (
    <Box
      maxW={{ base: "full", md: "600px", lg: "400px" }}
      color="white"
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      _hover={{
        borderColor: "#FFCE07",
        color: "#FFCE07",
      }}
    >
      <Stack spacing={2} m={1}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"white"}
          mb={3}
        >
          {props.icon}
        </Flex>
        <Box textAlign={"left"}>
          <Heading size="md" mb={3}>
            <Flex align="center" spacing={2}>
              <Text mr={5} color={"#FFCE07"}>
                {props.heading}
              </Text>
              <AiOutlineArrowRight />
            </Flex>
          </Heading>
          <Text mt={1} fontSize={"sm"} color="#272727" align="left">
            {props.description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default packageCard;

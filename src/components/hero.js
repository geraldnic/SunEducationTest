import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

import heroImage from "../assets/images/hero/heroImage.png";
import smallDots from "../assets/images/hero/smallDots.png";
import wideDots from "../assets/images/hero/wideDots.png";

export default function Hero() {
  return (
    <Container maxW={["100%", "85%", "75%"]}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 18 }}
        direction={{ base: "column", md: "row" }}
        pos={["relative", "relative", "initial"]}
        zIndex={"-1000"}
      >
        <Stack flex={1} spacing={5}>
          <Box
            border="1px solid black"
            w={"35px"}
            h={"50px"}
            align="center"
            my="auto"
            mx={3}
          />
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            ml={5}
          >
            <Text textShadow="0px 3px 2px rgba(0, 0, 0, 0.50)">
              Build or scale up
            </Text>
            <Text
              as={"span"}
              fontWeight={400}
              textShadow="0px 3px 2px rgba(0, 0, 0, 0.50)"
            >
              your development team
            </Text>
          </Heading>
          <Flex>
            <Box
              w={"70px"}
              borderRadius={"20px"}
              align="center"
              my="auto"
              mx={3}
            >
              <Box bg={"#FFCE3D"} w={"full"} h={"5px"} borderRadius={"20px"} />
            </Box>
            <Text
              color={"black"}
              fontSize={"20px"}
              textShadow="0px 3px 2px rgba(0, 0, 0, 0.30)"
            >
              in weeks, not months
            </Text>
          </Flex>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              h={"53px"}
              w={"175px"}
              fontSize={"sm"}
              px={6}
              bg={"#FFCE3D"}
              _hover={{
                bg: "#FFDD77",
                color: "#636669",
              }}
            >
              Book Now
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} position={"relative"} w={"full"}>
          <Image alt={"Hero Image"} fit={"cover"} w={"120%"} src={heroImage} />
          <Image
            alt={"Small Dots"}
            fit={"cover"}
            src={smallDots}
            position={"absolute"}
            top={"20%"}
            left={"-7%"}
            zIndex={-1000}
            w={["50px", "50px", "60px"]}
          />
          <Image
            alt={"Wide Dots"}
            fit={"cover"}
            src={wideDots}
            position={"absolute"}
            top={"90%"}
            right={"18%"}
            zIndex={-1000}
            w={["200px", "250px", "325px"]}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

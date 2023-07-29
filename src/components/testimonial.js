import React from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  Image,
  Circle,
} from "@chakra-ui/react";

// import images
import openQuote from "../assets/images/testimonials/openQuote.png";
import closeQuote from "../assets/images/testimonials/closeQuote.png";
import coloredDots from "../assets/images/testimonials/coloredDots.png";
import plainDots from "../assets/images/testimonials/plainDots.png";

function Testimonial() {
  return (
    <Box
      my={20}
      maxW={["100%", "85%", "75%"]}
      textAlign={"center"}
      mx={"auto"}
      position={"relative"}
      zIndex={"-10"}
    >
      <Stack spacing={4} textAlign={"center"}>
        <Text color={"#C4C4C4"} fontSize={"lg"}>
          Testimonials
        </Text>
        <Box position={"relative"}>
          <Image src={openQuote} position={"absolute"} left={"-7%"} />
          <Image
            src={closeQuote}
            position={"absolute"}
            right={"5%"}
            bottom={"8%"}
          />
          <Image
            src={coloredDots}
            position={"absolute"}
            left={"45%"}
            top={"20%"}
            opacity={["0.2", "0.3", "1"]}
          />
          <Image
            src={plainDots}
            position={"absolute"}
            bottom={0}
            left={"-10%"}
          />
          <Heading
            fontSize={"3xl"}
            fontWeight="bold"
            maxW={"500px"}
            mx={"auto"}
          >
            What clients love in working with Albatech Team
          </Heading>
          <SimpleGrid
            columns={[1, 1, 2]}
            spacing={10}
            textAlign={"left"}
            mt={14}
          >
            <Box>
              <Box maxW={"550px"} w={"full"} p={6} overflow={"hidden"}>
                <Stack>
                  <Heading fontSize={"4xl"} fontFamily={"body"}>
                    Amazing People
                  </Heading>
                  <Text fontSize={"2xl"}>
                    "They are people who are not only following the task, but
                    can work as a team. Together."
                  </Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Circle size={"40px"} bg={"#C4C4C4"} />
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>Matthijs Piëst</Text>
                    <Text color={"gray.500"}>COO at WieBetaaltWat</Text>
                  </Stack>
                </Stack>
              </Box>
              <Box maxW={"550px"} w={"full"} mt={10} p={6} overflow={"hidden"}>
                <Stack>
                  <Heading fontSize={"xl"} fontFamily={"body"}>
                    Amazing People
                  </Heading>
                  <Text fontSize={"lg"}>
                    "They are people who are not only following the task, but
                    can work as a team. Together."
                  </Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>Matthijs Piëst</Text>
                    <Text color={"gray.500"}>COO at WieBetaaltWat</Text>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            <Box>
              <Box maxW={"550px"} w={"full"} p={6} overflow={"hidden"}>
                <Stack>
                  <Heading fontSize={"xl"} fontFamily={"body"}>
                    Amazing People
                  </Heading>
                  <Text fontSize={"lg"}>
                    "They are people who are not only following the task, but
                    can work as a team. Together."
                  </Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>Matthijs Piëst</Text>
                    <Text color={"gray.500"}>COO at WieBetaaltWat</Text>
                  </Stack>
                </Stack>
              </Box>
              <Box maxW={"550px"} w={"full"} mt={10} p={6} overflow={"hidden"}>
                <Stack>
                  <Heading fontSize={"4xl"} fontFamily={"body"}>
                    Amazing People
                  </Heading>
                  <Text fontSize={"2xl"}>
                    "We felt like we had a true partner throughout the process.
                    They were clearly interested on our long-term success."
                  </Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Circle size={"40px"} bg={"#C4C4C4"} />
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>Matthijs Piëst</Text>
                    <Text color={"gray.500"}>COO at WieBetaaltWat</Text>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Stack>
    </Box>
  );
}

export default Testimonial;

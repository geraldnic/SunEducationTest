import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

const stats = [
  {
    title: "1000+",
    content: "Designs",
  },
  {
    title: "30+",
    content: "Products",
  },
  {
    title: "58+",
    content: "Website Developments",
  },
];

export default function Product() {
  return (
    <Box bg={"#272727"} zIndex={"-10"} position={"relative"}>
      <Container maxW={"75%"}>
        <Stack
          direction={{ base: "column", lg: "column" }}
          textAlign={"center"}
        >
          <Box mb={5} maxW={"800px"} mx="auto" pt={"50px"}>
            <Heading color={"#FFCE07"} fontSize={"3xl"}>
              Our Progress Comes with a Collaboration Beetween Creativity,
              Ideas, and Technology
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 3 }}>
            {stats.map((stat) => (
              <Box key={stat.title} pb={"50px"}>
                <Text
                  fontFamily={"heading"}
                  fontSize={"5xl"}
                  color={"white"}
                  mb={3}
                >
                  {stat.title}
                </Text>
                <Text fontSize={"2xl"} color={"white"}>
                  {stat.content}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

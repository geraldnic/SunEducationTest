import { Box, Center, Heading, Text, Stack, Image } from "@chakra-ui/react";

export default function PortofolioCard(props) {
  return (
    <Center py={6}>
      <Box
        maxW={["80vw", "40vw", "20vw"]}
        w={"full"}
        rounded={"md"}
        border={"1px solid #C4C4C4"}
        p={6}
        _hover={{
          borderColor: "#FFCE07",
        }}
      >
        <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image src={props.image} width={"100%"} />
        </Box>
        <Stack textAlign={"left"}>
          <Text
            color={"#C4C4C4"}
            fontWeight={500}
            fontSize={"xs"}
            letterSpacing={1.1}
          >
            {props.category}
          </Text>
          <Heading color={"#FFCE07"} fontSize={"2xl"} fontFamily={"body"}>
            {props.heading}
          </Heading>
          <Text color={"#272727"}>{props.description}</Text>
        </Stack>
      </Box>
    </Center>
  );
}

import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"650"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box pb={10}>
      <Container as={Stack} maxW={"75%"} py={16} borderY={"1px solid #C4C4C4"}>
        <SimpleGrid
          templateColumns={["1fr", "1fr", "2fr 1fr 1fr 1fr 2fr"]}
          spacing={8}
        >
          <Stack spacing={6} textAlign={["center", "center", "left"]}>
            <Box mx={["auto", "auto", "0"]}>
              <Image
                src={"https://albatech.id/Asset/Background+Icon/Logo.png"}
                w={"130px"}
              />
            </Box>
            <Text fontSize={"sm"} mx={"auto"}>
              Albatech acts as a corporate partner to help digitize their
              business to accelerate trends in remote work.
            </Text>
          </Stack>
          <Spacer />
          <Stack textAlign={["center", "center", "left"]}>
            <ListHeader>Website</ListHeader>
            <Box
              as="a"
              href={"#"}
              my={2}
              _hover={{
                color: "#FFDD77",
              }}
            >
              About
            </Box>
            <Box
              as="a"
              href={"#"}
              my={2}
              _hover={{
                color: "#FFDD77",
              }}
            >
              Service
            </Box>
            <Box
              as="a"
              href={"#"}
              my={2}
              _hover={{
                color: "#FFDD77",
              }}
            >
              Portofolio
            </Box>
            <Box
              as="a"
              href={"#"}
              my={2}
              _hover={{
                color: "#FFDD77",
              }}
            >
              Blog
            </Box>
            <Box
              as="a"
              href={"#"}
              my={2}
              _hover={{
                color: "#FFDD77",
              }}
            >
              Career
            </Box>
          </Stack>
          <Spacer />
          <Stack textAlign={["center", "center", "left"]}>
            <ListHeader>Contact</ListHeader>
            <Box as="Text" my={2}>
              The Prominence Blok 38D No.25 <br /> Jl. Jalur Sutera Barat, Alam
              Sutera, <br /> Kota Tangerang, Banten 15143
            </Box>
            <Box as="Text" my={2}>
              <span style={{ fontWeight: "bold" }}>P : </span>+62 81 1889 3383
            </Box>
            <Box as="Text" my={2}>
              <span style={{ fontWeight: "bold" }}>E : </span>info@albatech.id
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Flex
        justifyContent={"space-between"}
        maxW={"75%"}
        textAlign={"center"}
        mx={"auto"}
        color={"#C4C4C4"}
        mt={5}
      >
        <Text>©PT. Alba Digital Teknologi 2021 | All Rights Reserved</Text>
        <Text>Privacy policy | Terms of service</Text>
      </Flex>
    </Box>
  );
}

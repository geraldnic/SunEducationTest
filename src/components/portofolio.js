import {
  Box,
  Heading,
  Stack,
  Text,
  Container,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import React from "react";

//import images
import iliosApp from "../assets/images/portofolio/ILIOSapp.png";
import homeAndLiving from "../assets/images/portofolio/homeandliving.png";
import hippo from "../assets/images/portofolio/hippo.png";
import PortofolioCard from "./Cards/portofolioCard";

const portofolios = [
  {
    image: iliosApp,
    category: "Mobile apps",
    heading: "ILIOS app (B2B E-commerce)",
    description:
      "Has a unique selling point where not all companies offer applications for sales, data collection and management.",
  },
  {
    image: homeAndLiving,
    category: "Website development",
    heading: "Mobile apps development",
    description:
      "Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living",
  },
  {
    image: hippo,
    category: "Website development",
    heading: "Digital product deisgn",
    description:
      "Albatech help to create e-commerce and company profile for Hippo's Website with realtime transaction and integration with Payment Gateway to accept multi payment.",
  },
];

function Portofolio() {
  return (
    <Box
      my={20}
      maxW={["100%", "85%", "65%"]}
      textAlign={"center"}
      mx={"auto"}
      pos={["relative", "relative", "initial"]}
      zIndex={"-1000"}
    >
      <Stack spacing={4} as={Container} textAlign={"center"}>
        <Text color={"#C4C4C4"} fontSize={"lg"}>
          Portofolio
        </Text>
        <Heading fontSize={"3xl"} fontWeight="bold" maxW={"500px"} mx={"auto"}>
          The software that we build <br /> takes our clients to the next level
        </Heading>
      </Stack>
      <SimpleGrid columns={[1, 1, 3]}>
        {portofolios.map((portofolio) => (
          <Box key={portofolio.heading}>
            <PortofolioCard
              image={portofolio.image}
              category={portofolio.category}
              heading={portofolio.heading}
              description={portofolio.description}
            />
          </Box>
        ))}
      </SimpleGrid>
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
        Learn Now
      </Button>
    </Box>
  );
}

export default Portofolio;

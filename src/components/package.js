import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  Stack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

import PackageCard from "./Cards/packageCard";

//import package icons
import CMSDev from "../assets/icons/packageCard/CMSDev.png";
import digitalProductionDesign from "../assets/icons/packageCard/digitalProductDesign.png";
import integratedPaymentGateway from "../assets/icons/packageCard/integratedPaymentGateway.png";
import maintenance from "../assets/icons/packageCard/maintenance.png";
import mobileAppDev from "../assets/icons/packageCard/mobileAppDev.png";
import webDev from "../assets/icons/packageCard/webDev.png";

//import tech icons
import angular from "../assets/icons/technologies/angular.png";
import aws from "../assets/icons/technologies/aws.png";
import cloud from "../assets/icons/technologies/cloud.png";
import css from "../assets/icons/technologies/css.png";
import html from "../assets/icons/technologies/html.png";
import js from "../assets/icons/technologies/js.png";
import microsoft from "../assets/icons/technologies/microsoft.png";
import mongoDB from "../assets/icons/technologies/mongoDB.png";
import mySQL from "../assets/icons/technologies/mySQL.png";
import php from "../assets/icons/technologies/php.png";
import postgree from "../assets/icons/technologies/postgree.png";
import python from "../assets/icons/technologies/python.png";
import react from "../assets/icons/technologies/react.png";
import ruby from "../assets/icons/technologies/ruby.png";

const packages = [
  {
    icon: webDev,
    heading: "Website development",
    description:
      "High-performance website to reach out more your potential customers",
  },
  {
    icon: mobileAppDev,
    heading: "Mobile apps development",
    description: "To accelerate your business process",
  },
  {
    icon: digitalProductionDesign,
    heading: "Digital product deisgn",
    description:
      "Complete digital product creations from UX prototyping to final UI designs",
  },
  {
    icon: maintenance,
    heading: "Maintenance",
    description: "Make sure your digital environment keep online and updated",
  },
  {
    icon: CMSDev,
    heading: "CMS development",
    description: "You can update your website content yourself",
  },
  {
    icon: integratedPaymentGateway,
    heading: "Integrated payment gateway",
    description: "Simplify the payment system with just one step",
  },
];

const technologies = [
  aws,
  cloud,
  angular,
  css,
  html,
  js,
  php,
  python,
  react,
  ruby,
  mongoDB,
  mySQL,
  postgree,
  microsoft,
];

export default function Package() {
  return (
    <Box
      p={4}
      mt={20}
      maxW={["100%", "85%", "75%"]}
      textAlign={"center"}
      mx={"auto"}
      position={"relative"}
    >
      <Stack spacing={4} as={Container} maxW={"100%"} textAlign={"center"}>
        <Text color={"#C4C4C4"} fontSize={"lg"}>
          Complete Package
        </Text>
        <Heading
          fontSize={"3xl"}
          fontWeight="bold"
          textShadow="0px 3px 2px rgba(0, 0, 0, 0.50)"
        >
          From product design to software continuous delivery
        </Heading>
      </Stack>
      <Container maxW={"100%"} mt={10}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {packages.map((item) => (
            <PackageCard
              key={item.heading}
              heading={item.heading}
              icon={<Image src={item.icon} />}
              description={item.description}
            />
          ))}
        </Flex>
      </Container>
      <Container
        maxW={"100%"}
        mt={20}
        textAlign="center"
        mx="auto"
        alignItems="center"
        align="center"
      >
        <SimpleGrid columns={[1, 3, 6]} spacing="10px" w="100%" mb={10}>
          {technologies.map((tech) => (
            <Image
              key={tech}
              src={tech}
              textAlign="center"
              align="center"
              alignItems="center"
              mx="auto"
              mb={"40px"}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

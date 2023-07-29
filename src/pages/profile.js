import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Center,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import axios from "axios";
import { HiOutlineMail } from "react-icons/hi";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color="#ADEFD1FF">
        {text}
      </Text>
    </Stack>
  );
};

function Profile() {
  let { email } = useParams();
  const [totalPages, setTotalPages] = useState(0);
  const [currUser, setCurrUser] = useState({});
  const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("access_token");
  const dividerColor = useColorModeValue("gray.100", "gray.700");

  // Mencari jumlah halaman dari daftar user
  const getPages = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      if (response.status === 200) {
        setTotalPages(response.data.total_pages);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Mencari detail dari user
  const findUsers = async () => {
    for (let i = 1; i <= totalPages; i++) {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${i}`
        );
        if (response.status === 200) {
          const users = response.data;
          users.data.map((user, index) => {
            if (user.email == email) {
              setCurrUser(user);
              i = totalPages;
            }
            let key = index;
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getPages();
  }, []);

  useEffect(() => {
    findUsers();
  }, [totalPages]);

  const logout = () => {
    cookies.remove("access_token", { path: `/` });
    window.localStorage.removeItem("email");
  };

  return (
    <Box width={"900px"} mx={"auto"} maxW={"90%"}>
      <Heading color={"black"} fontSize={"5xl"} textAlign={"center"} mt={10}>
        Hola!
      </Heading>
      <Center py={10}>
        <Box>
          <Container maxW={"5xl"} bg="#14213D" p={10} borderRadius="10px">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  color={"blue.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  p={2}
                  bg={useColorModeValue("blue.50", "blue.900")}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  Profile
                </Text>
                <Heading color="#FCA311">
                  {currUser.first_name} {currUser.last_name}
                </Heading>
                <Text fontSize={"lg"} color={"grey"}>
                  Token : {token}
                </Text>
                <Stack
                  spacing={4}
                  divider={<StackDivider borderColor={dividerColor} />}
                >
                  <Feature
                    icon={
                      <Icon
                        as={HiOutlineMail}
                        color={"yellow.900"}
                        w={5}
                        h={5}
                      />
                    }
                    iconBg={"yellow.400"}
                    text={currUser.email}
                  />
                </Stack>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={currUser.avatar}
                  objectFit={"cover"}
                  mx={["auto", "auto", 10]}
                />
              </Flex>
            </SimpleGrid>
          </Container>
        </Box>
      </Center>
      <Center py={5}>
        <Flex>
          <Link to="/">
            <Button
              colorScheme="blue"
              maxW="45vw"
              width="250px"
              h={"45px"}
              mr={2}
            >
              Back to Home
            </Button>
          </Link>
          <ChakraLink href="/">
            <Button
              colorScheme="red"
              maxW="45vw"
              width="250px"
              h={"45px"}
              ml={2}
              onClick={logout}
            >
              Logout
            </Button>
          </ChakraLink>
        </Flex>
      </Center>
    </Box>
  );
}

export default Profile;

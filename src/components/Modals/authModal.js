import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Center,
  Circle,
  Heading,
} from "@chakra-ui/react";

import { FaLock } from "react-icons/fa";
import NotificationModal from "./notificationModal";

export default function AuthModal(props) {
  const [username, setUsername] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const password = "cityslicka";
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const openNotification = () => {
    setIsNotificationOpen(true);
  };

  const closeNotification = () => {
    setIsNotificationOpen(false);
  };

  const tryAgain = () => {
    setIsNotificationOpen(false);
    props.openModal();
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        username,
        password,
      });

      if (response.status === 200) {
        setCookies("access_token", response.data.token, {
          maxAge: 3600, //expire dalam 1 jam
        });
        window.localStorage.setItem("email", username);
        navigate(`/profile/${username}`);
        setLoginMessage(response.data.token);
      }
    } catch (err) {
      setLoginMessage(err.response.data.error);
      openNotification();
    }
  };
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent w={"450px"} maxW={"90%"} zIndex={"100"}>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box rounded={"lg"} bg="white" px={8} pb={8}>
              <Center>
                <Circle size={14} border="1px" borderColor="black">
                  <FaLock />
                </Circle>
              </Center>
              <Heading fontSize={"3xl"} textAlign={"center"} mb={5}>
                Login to your account!
              </Heading>
              <Stack spacing={4}>
                <form onSubmit={submitForm}>
                  <FormControl id="email" isRequired mb={3}>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <Stack spacing={10} mt={10}>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      type="submit"
                      onClick={props.close}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <NotificationModal
        message={loginMessage}
        isOpen={isNotificationOpen}
        onClose={closeNotification}
        tryAgain={tryAgain}
      />
    </>
  );
}

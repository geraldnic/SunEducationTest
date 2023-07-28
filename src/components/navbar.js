import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Image,
  Spacer,
} from "@chakra-ui/react";

import { useCookies } from "react-cookie";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import AuthModal from "./Modals/authModal";
import { useState } from "react";

const NAV_ITEMS = [
  {
    label: "Service",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Portofolio",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Career",
    href: "#",
  },
];

export default function Navbar() {
  const [cookies, removeCookies] = useCookies(["access_token"]);

  const { isOpen, onToggle } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  let email = localStorage.getItem("email");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        h={"90px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        textAlign={"center"}
        w={"100%"}
        zIndex={1000}
        position={"fixed"}
        mb={"90px"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          h="100%"
          w="75%"
          align="center"
          textAlign="center"
          mx="auto"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Link to={"/"}>
            <Image
              src="https://albatech.id/Asset/Background+Icon/Logo.png"
              w="140px"
            />
          </Link>
          <Flex display={{ base: "none", lg: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
          <Flex ml={10} right={0}>
            {!cookies.access_token ? (
              <Button
                fontSize={["xs","sm","sm"]}
                fontWeight="Bold"
                color={"black"}
                bg={"#FFCE3D"}
                border="1px solid black"
                borderRadius="50px"
                w={["60px","110px","175px"]}
                h="53px"
                _hover={{
                  bg: "#FFDD77",
                  color: "#636669",
                }}
                onClick={openModal}
              >
                Profile
              </Button>
            ) : (
              <Button
                as={"a"}
                href={`/profile/${email}`}
                fontSize={"sm"}
                fontWeight="Bold"
                color={"black"}
                bg={"#FFCE3D"}
                border="1px solid black"
                borderRadius="50px"
                w="175px"
                h="53px"
                _hover={{
                  bg: "#FFDD77",
                  color: "#636669",
                }}
              >
                Profile
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <AuthModal isOpen={isModalOpen} onClose={closeModal} close={closeModal} openModal={openModal} />
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "black";
  return (
    <Stack direction={"row"} spacing={10}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight="bold"
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  textShadow: "0px 3px 2px rgba(0, 0, 0, 0.30)",
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
          </Popover>
          <Spacer />
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg="#FDEEB2"
      h="100vh"
      w={"100%"}
      p={4}
      textAlign="center"
      fontWeight="bold"
      display={{ md: "none" }}
      mt={"90px"}
      position={"fixed"}
      zIndex={1000}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Stack spacing={4}>
        <Box
          py={2}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
        >
        </Box>
      </Stack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen } = useDisclosure();

  return (
    <Stack spacing={4}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight="bold" color="black" fontSize={"lg"}>
          {label}
        </Text>
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

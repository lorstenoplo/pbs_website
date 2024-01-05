import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Heading,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 6 }}
        py={4}
        shadow="md"
        zIndex={10}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="PBS Home Page"
              display="flex"
              alignItems="center"
              as={Link}
            >
              {/* <Heading fontSize={'xl'}>PBS</Heading> */}
              <Image src={"/logo.png"} alt="PBS" height={50} width={50} />
              <Heading
                fontSize={"xl"}
                ml={4}
                display={{ xs: "none", sm: "block" }}
              >
                Plant Based Society
              </Heading>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href={"/"}>
                <Button variant="ghost">Home</Button>
              </Link>
              <Link href={"/about"}>
                <Button variant="ghost">About</Button>
              </Link>
              <Link href={"/contact"}>
                <Button variant="ghost">Contact Us</Button>
              </Link>
              <Button variant="ghost">Activity</Button>
            </HStack>
            <Button colorScheme="green" size="sm">
              Get Started
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link href={"/"}>
                  <Button w="full" variant="ghost">
                    Home
                  </Button>
                </Link>
                <Link href={"/about"}>
                  <Button w="full" variant="ghost">
                    About
                  </Button>
                </Link>
                <Link href={"/contact"}>
                  <Button w="full" variant="ghost">
                    Contact Us
                  </Button>
                </Link>
                <Button w="full" variant="ghost">
                  Activity
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
export default Navbar;

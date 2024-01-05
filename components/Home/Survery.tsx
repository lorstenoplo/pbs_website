import React from "react";
import { chakra, Box, Flex, SimpleGrid, Icon, Image } from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";

const Survey = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} bg={"green.50"}>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color="green.400"
          _dark={{ color: "gray.300" }}
          fontSize="xs"
          textTransform="uppercase"
          fontWeight="extrabold"
          mb={2}
          bg={"green.100"}
          p={2}
          borderRadius={"10px"}
        >
          Award winning support
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl" }}
          fontWeight="bold"
          color="gray.700"
          _dark={{ color: "gray.300" }}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          Your Voice Matters! 🌱
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color="gray.600"
          _dark={{ color: "gray.400" }}
          letterSpacing="wider"
        >
          Help us shape the future of plant-based living by sharing your
          thoughts and experiences. Take a few moments to complete our survey
          and be part of a community committed to positive change.
        </chakra.p>
        <Box display="inline-flex" rounded="md" shadow="md">
          <chakra.a
            mt={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            _light={{ color: "white" }}
            bg="green.600"
            _dark={{ bg: "green.500" }}
            _hover={{
              bg: "green.700",
              _dark: { bg: "green.600" },
            }}
            cursor={"pointer"}
          >
            Fill out the Survey
            <Icon as={FiExternalLink} ml={2} />
          </chakra.a>
        </Box>
      </Flex>

      <Flex bg="green.100">
        <Image
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
          opacity={0.4}
        />
      </Flex>
    </SimpleGrid>
  );
};

export default Survey;

import React from "react";

import {
  Box,
  Button,
  chakra,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

const SuccessStories = () => {
  return (
    <Box bg="white" _dark={{ bg: "gray.800" }} px={8} pt={16} mx="auto">
      <Stack alignItems={"center"} pb={16}>
        <Heading fontSize={{ base: "2xl", sm: "5xl" }} color={"green.700"}>
          Discover Success Stories
        </Heading>
      </Stack>
      <SimpleGrid
        alignItems="start"
        columns={{ base: 1, md: 2 }}
        mb={24}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
      >
        <Box>
          <chakra.h2
            mb={4}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            // letterSpacing="tight"
            textAlign={{ base: "center", md: "left" }}
            color="gray.900"
            _dark={{ color: "gray.400" }}
            lineHeight={{ md: "shorter" }}
            // textShadow="2px 0 currentcolor"
          >
            Clear overview for efficient tracking
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: "center", sm: "left" }}
            color="gray.600"
            _dark={{ color: "gray.400" }}
            fontSize={{ md: "lg" }}
          >
            Handle your subscriptions and transactions efficiently with the
            clear overview in Dashboard. Features like the smart search option
            allow you to quickly find any data you’re looking for.
          </chakra.p>
          <Button
            w={{ base: "full", sm: "auto" }}
            size="lg"
            bg="gray.900"
            _dark={{ bg: "gray.700" }}
            _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
            color="gray.100"
            as="a"
          >
            Learn More
          </Button>
        </Box>
        <Box
          w="full"
          h="full"
          py={48}
          bg="gray.200"
          _dark={{ bg: "gray.700" }}
        ></Box>
      </SimpleGrid>
      <SimpleGrid
        alignItems="start"
        columns={{ base: 1, md: 2 }}
        flexDirection="column-reverse"
        mb={10}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
      >
        <Box order={{ base: "initial", md: 2 }}>
          <chakra.h2
            mb={4}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            textAlign={{ base: "center", md: "left" }}
            color="gray.900"
            _dark={{ color: "gray.400" }}
            lineHeight={{ md: "shorter" }}
          >
            Decide how you integrate Payments
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: "center", sm: "left" }}
            color="gray.600"
            _dark={{ color: "gray.400" }}
            fontSize={{ md: "lg" }}
          >
            Love to code? Next to our ready-made and free plugins you can use
            our expansive yet simple API; decide how you integrate Payments and
            build advanced and reliable products yourself from scratch.
          </chakra.p>
          <Button
            w={{ base: "full", sm: "auto" }}
            size="lg"
            bg="gray.900"
            _dark={{ bg: "gray.700" }}
            _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
            color="gray.100"
            as="a"
          >
            Learn More
          </Button>
        </Box>
        <Box
          w="full"
          h="full"
          py={48}
          bg="gray.200"
          _dark={{ bg: "gray.700" }}
        ></Box>
      </SimpleGrid>
    </Box>
  );
};
export default SuccessStories;

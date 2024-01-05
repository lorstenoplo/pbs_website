import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VisuallyHidden,
  chakra,
  Divider,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import Head from "next/head";
import Layout from "@/components/shared/Layout";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout>
        <Box bg="#edf3f8" _dark={{ bg: "#111" }} p={10}>
          <Box mt={[10, 0]}>
            <SimpleGrid
              display={{ base: "initial", md: "grid" }}
              columns={{ md: 3 }}
              spacing={{ md: 6 }}
            >
              <GridItem colSpan={{ md: 1 }}>
                <Box px={[4, 0]}>
                  <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                    Personal Information
                  </Heading>
                  <Text
                    mt={1}
                    fontSize="sm"
                    color="gray.600"
                    _dark={{ color: "gray.400" }}
                  >
                    Use a permanent address where you can receive mail.
                  </Text>
                </Box>
              </GridItem>
              <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
                <chakra.form
                  method="POST"
                  shadow="base"
                  rounded={[null, "md"]}
                  overflow={{ sm: "hidden" }}
                >
                  <Stack
                    px={4}
                    py={5}
                    p={[null, 6]}
                    bg="white"
                    _dark={{ bg: "#141517" }}
                    spacing={6}
                  >
                    <SimpleGrid columns={6} spacing={6}>
                      <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                          htmlFor="first_name"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{ color: "gray.50" }}
                        >
                          First name
                        </FormLabel>
                        <Input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          mt={1}
                          focusBorderColor="green.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                          htmlFor="last_name"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{ color: "gray.50" }}
                        >
                          Last name
                        </FormLabel>
                        <Input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          mt={1}
                          focusBorderColor="green.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 4]}>
                        <FormLabel
                          htmlFor="email_address"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{ color: "gray.50" }}
                        >
                          Email address
                        </FormLabel>
                        <Input
                          type="text"
                          name="email_address"
                          id="email_address"
                          autoComplete="email"
                          mt={1}
                          focusBorderColor="green.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{ color: "gray.50" }}
                        >
                          Country / Region
                        </FormLabel>
                        <Select
                          id="country"
                          name="country"
                          autoComplete="country"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="green.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </Select>
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 5]}>
                        <FormLabel
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50",
                          }}
                        >
                          Message
                        </FormLabel>
                        <Textarea
                          placeholder="Type your message..."
                          mt={1}
                          rows={3}
                          shadow="sm"
                          focusBorderColor="brand.400"
                          fontSize={{
                            sm: "sm",
                          }}
                        />
                        <FormHelperText>
                          Brief description for your issue. Our team will help you out soon!
                        </FormHelperText>
                      </FormControl>
                    </SimpleGrid>
                  </Stack>
                  <Box
                    px={{ base: 4, sm: 6 }}
                    py={3}
                    bg="gray.50"
                    _dark={{ bg: "#121212" }}
                    textAlign="right"
                  >
                    <Button
                      type="submit"
                      colorScheme="green"
                      _focus={{ shadow: "" }}
                      fontWeight="md"
                    >
                      Save
                    </Button>
                  </Box>
                </chakra.form>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Contact;

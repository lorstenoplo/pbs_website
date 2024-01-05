import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <VStack w={"100vw"} alignItems={"center"}>
      <VStack maxW={"7xl"} w={"full"} spacing={0}>
        <Navbar />
        <Box w={"full"}>{children}</Box>
        <Footer />
      </VStack>
    </VStack>
  );
};

export default Layout;

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
// Supports weights 100-900
import "@fontsource-variable/kumbh-sans";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Kumbh Sans Variable', sans-serif`,
    body: `'Kumbh Sans Variable', sans-serif`,
  },
});

export default theme;

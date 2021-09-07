import {createTheme} from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    primary: "#2cb9b0",
    title: "#0c0d34",
    body: "#rgba(12, 13, 52, 0.7)",
    white: "white",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      color: "#0c0d34",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: "#0c0d34",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "rgba(12, 13, 52, 0.7)",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;

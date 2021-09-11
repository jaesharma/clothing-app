import "react-native-gesture-handler";
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createTheme, ThemeProvider} from "@shopify/restyle";

import {AuthenticationNavigator} from "./src/Authentication";
import theme from "./src/components/Theme";

export default function App() {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

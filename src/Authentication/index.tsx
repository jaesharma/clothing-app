import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Onboarding from "./Onboarding";
import Welcome from "./Welcome";
import Login from "./Login";
export {default as Onboarding} from "./Onboarding";
export {default as Welcome} from "./Welcome";

type AppRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
};
const AuthenticationStack = createStackNavigator<AppRoutes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <AuthenticationStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <AuthenticationStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </AuthenticationStack.Navigator>
  );
};

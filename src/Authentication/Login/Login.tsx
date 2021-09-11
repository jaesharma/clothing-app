import React, {Fragment} from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";

import {Container, LinkButton} from "../../components";

import SocialLoginOptions from "./SocialLoginOptions";

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    width,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});

const FooterComponent = () => {
  return (
    <Fragment>
      <SocialLoginOptions />
      <View style={styles.row}>
        <Text style={styles.text}>Don't have an account? </Text>
        <LinkButton label="Sign up here" navigateTo="SignUp" />
      </View>
    </Fragment>
  );
};

function Login() {
  return (
    <Container footer={<FooterComponent />}>
      <Text>Login Screen</Text>
    </Container>
  );
}

export default Login;

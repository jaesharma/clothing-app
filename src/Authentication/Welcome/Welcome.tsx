import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Button from "../../components/Button";

import * as Images from "./../../images/index";

interface WelcomeProps {}

const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
  box1: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: 75,
    backgroundColor: "#f4f0ef",
  },
  box2: {
    display: "flex",
    flex: 1,
    backgroundColor: "grey",
    borderTopLeftRadius: 75,
  },
  absoluteBox: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#f4f0ef",
  },
  bottomBox: {
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
  },
  text1: {
    fontSize: 28,
    fontWeight: "700",
  },
  text2: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 14,
  },
});

const picture = {
  src: Images.MODEL_5,
  width: 333,
  height: 484,
};

const Welcome = (props): WelcomeProps => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          source={picture.src}
          style={{
            width: picture.width - BORDER_RADIUS,
            height:
              ((picture.width - BORDER_RADIUS) * picture.height) /
              picture.width,
          }}
        />
      </View>
      <View style={styles.box2}>
        <View style={styles.absoluteBox} />
        <View style={styles.bottomBox}>
          <Text style={styles.text1}>Let's get started</Text>
          <Text style={styles.text2}>
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            label="Have an account? Login"
            variant="primary"
            gutter
            onPress={() => props.navigation.navigate("Login")}
          />
          <Button label="Join us, it's Free" gutter />
          <Button label="Forgot password?" variant="transparent" gutter />
        </View>
      </View>
    </View>
  );
};

export default Welcome;

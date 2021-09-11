import React, {ReactNode} from "react";
import {View, Dimensions, StyleSheet, StatusBar, Image} from "react-native";

import {BORDER_RADIUS} from "../Authentication/Onboarding/Slide";
import * as Images from "../images";

const {width} = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "#0c0d34",
  },
  box1: {
    display: "flex",
    borderBottomLeftRadius: BORDER_RADIUS,
    overflow: "hidden",
    height: height * 0.61,
  },
  box2: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  },
  contentBox: {
    display: "flex",
    borderRadius: BORDER_RADIUS,
    borderTopLeftRadius: 0,
    backgroundColor: "white",
    flex: 1,
  },
  footerBox: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#0c0d34",
    height: 160,
  },
});

function Container({children, footer}: ContainerProps) {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          backgroundColor: "white",
        }}>
        <View style={styles.box1}>
          <Image
            source={Images.PATTERN_1}
            style={{
              width,
              height,
              borderBottomLeftRadius: BORDER_RADIUS,
            }}
          />
        </View>
      </View>
      <View style={styles.box2}>
        <Image
          source={Images.PATTERN_1}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <View style={styles.contentBox}>{children}</View>
      </View>
      <View style={styles.footerBox}>{footer}</View>
    </View>
  );
}

export default Container;

import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";

const {width, height} = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;
interface SlideProps {
  label: string;
  right?: boolean;
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: "white",
    textAlign: "center",
  },
});

const Slide = ({label, right, picture}: SlideProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? "-90deg" : "90deg"},
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;

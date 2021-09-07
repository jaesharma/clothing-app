import React from "react";
import {StyleSheet, View, Text} from "react-native";
import Animated from "react-native-reanimated";

import Button from "../../components/Button";

interface SubSlideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 4,
    color: "#0c0d34",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#0c0d34",
    textAlign: "center",
    marginBottom: 25,
  },
});

const SubSlide = ({subtitle, description, last, onPress}: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{onPress}}
      />
    </View>
  );
};

export default SubSlide;

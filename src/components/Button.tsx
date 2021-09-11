import React from "react";
import {Text} from "react-native";
import {StyleSheet} from "react-native";
import {RectButton} from "react-native-gesture-handler";

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label: string;
  gutter: boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    textAlign: "center",
  },
});

const getBgColor = (variant: string) => {
  switch (variant) {
    case "primary":
      return "#2cb9b0";
    case "transparent":
      return "";
    default:
      return "rgba(12, 13, 52, 0.05)";
  }
};

const Button = ({variant, label, gutter, onPress}: ButtonProps) => {
  const backgroundColor = getBgColor(variant);
  const color = variant === "primary" ? "white" : "#0c0d34";
  const customStyles = {};
  if (gutter) {
    customStyles.marginTop = 8;
    customStyles.marginBottom = 8;
  }
  return (
    <RectButton
      style={[styles.container, {backgroundColor}, customStyles]}
      {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

export default Button;

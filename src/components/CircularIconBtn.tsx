import React, {ReactNode} from "react";
import {View, Image, StyleSheet} from "react-native";

interface CircularIconBtnProps {
  icon: ReactNode;
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
  iconAura: {
    backgroundColor: "white",
    height: 48,
    width: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 40,
    marginLeft: 14,
    marginRight: 14,
  },
});

const CircularIconBtn = ({icon}: CircularIconBtnProps) => {
  return <View style={styles.iconAura}>{icon}</View>;
};

export default CircularIconBtn;

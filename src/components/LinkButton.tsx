import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

const styles = StyleSheet.create({
  linkText: {
    color: "#0e8bb5",
    fontSize: 16,
  },
});

interface LinkButtonProps {
  label: string;
  navigateTo: string;
}

function LinkButton({label, navigateTo}: LinkButtonProps) {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={styles.linkText}
        onPress={() => navigation.navigate(navigateTo)}>
        {label}
      </Text>
    </View>
  );
}

export default LinkButton;

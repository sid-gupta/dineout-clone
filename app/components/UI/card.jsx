import React from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: "white",
  },
});

export default Card;

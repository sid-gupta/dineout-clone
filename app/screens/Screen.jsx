import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

export default function ({ children, style = {} }) {
  return (
    <SafeAreaView style={{ ...styles.container, ...style }}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});

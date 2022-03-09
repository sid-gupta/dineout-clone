import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Rating = ({ rating = "3.5" }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="star" size={12} color="white" />
      <Text style={styles.rating}>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: "green",
    width: 45,
    height: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {},
  rating: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
  },
});

export default Rating;

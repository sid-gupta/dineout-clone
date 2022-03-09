import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryCard = ({
  iconName = "beer",
  iconColor = "tomato",
  categoryName = "Category of Food",
}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={iconName} size={32} color={iconColor} />
      <Text style={styles.name}>{categoryName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 12,
    backgroundColor: "white",
    height: 100,
    width: "23%",
    padding: 9,
  },
  name: {
    paddingTop: 12,
    fontSize: 12,
    fontWeight: "100",
  },
});

export default CategoryCard;

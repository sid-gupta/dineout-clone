import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ActionItem = ({ title, subTitle, IconComponent, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        {IconComponent}
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {subTitle && (
            <Text style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 12,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: "grey",
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ActionItem;

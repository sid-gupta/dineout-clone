import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const CuisineList = ({ cuisines = [] }) => {
  return (
    <View style={{ overflow: "hidden", width: "100%" }}>
      <FlatList
        horizontal
        keyExtractor={(item) => item.toString()}
        data={cuisines}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        ItemSeparatorComponent={() => <Text style={styles.text}>, </Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "grey",
  },
});

export default CuisineList;

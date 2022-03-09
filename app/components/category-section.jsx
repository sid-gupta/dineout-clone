import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CategoryCard from "./category-card";

const CategoriesSection = () => {
  const { getCategories } = useData();
  const categories = getCategories();

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 18,
    marginTop: 24,
  },
  separator: {
    width: 10,
    height: 10,
  },
});

export default CategoriesSection;

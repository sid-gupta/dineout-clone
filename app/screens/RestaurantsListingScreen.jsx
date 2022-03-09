import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import RestaurantListItem from "../components/restaurant-list-item";
import Screen from "./Screen";

const RestaurantListingScreen = ({ route, navigation }) => {
  const { restaurants } = route.params;
  const restaurantsToShow = restaurants;

  return (
    <Screen style={styles.screen}>
      <FlatList
        renderItem={({ item }) => (
          <RestaurantListItem
            onPress={() =>
              navigation.navigate("Restaurant", {
                title: item.title,
                restaurantId: item.id,
              })
            }
            restaurant={item}
          />
        )}
        keyExtractor={(item) => item.id}
        data={restaurantsToShow}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});

export default RestaurantListingScreen;

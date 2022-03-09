import React from "react";
import { StyleSheet } from "react-native";
import useData from "../hooks/useData";
import RestaurantContext from "../context/restaurtant";
import RestaurantNavigator from "../navigation/RestaurantNavigator";

const RestaurantDetailsScreen = ({ route }) => {
  const { getRestaurantById } = useData();
  const restaurant = getRestaurantById(route.params.restaurantId);

  return (
    <RestaurantContext.Provider value={{ restaurant }}>
      <RestaurantNavigator />
    </RestaurantContext.Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingBottom: 24,
  },
});

export default RestaurantDetailsScreen;

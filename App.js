import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";

import initialRestaurants from "./app/data/restaurants";
import initialCategories from "./app/data/categories";
import initialOffers from "./app/data/offers";
import DineoutContext from "./app/context/data";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <DineoutContext.Provider
      value={{
        restaurants: initialRestaurants,
        categories: initialCategories,
        offers: initialOffers,
      }}
    >
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </DineoutContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
  },
});

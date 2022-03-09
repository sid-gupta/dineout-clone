import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import RestaurantListingScreen from "../screens/RestaurantsListingScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="Restaurant"
      component={RestaurantDetailsScreen}
      options={({ route }) => ({ title: route.params.title })}
    />
    <Stack.Screen
      name="RestaurantListings"
      component={RestaurantListingScreen}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);

export default AppNavigator;

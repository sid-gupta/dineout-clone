import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RestaurantMenu from "../screens/restaurant-details/restaurant-menu";
import RestaurantOverview from "../screens/restaurant-details/restaurant-overview";

const Tab = createMaterialTopTabNavigator();

const RestaurantNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
      }}
    >
      <Tab.Screen name="Overview" component={RestaurantOverview} />
      <Tab.Screen name="Menu" component={RestaurantMenu} />
    </Tab.Navigator>
  );
};

export default RestaurantNavigator;

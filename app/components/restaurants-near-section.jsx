import { useNavigation } from "@react-navigation/native";
import React from "react";
import HorizontalSection from "./horizontal-section";
import RestaurantCard from "./restaurant-near-card";

const RestaurantNearSection = ({ restaurants, onNav = () => {} }) => {
  const navigation = useNavigation();

  return (
    <HorizontalSection
      sectionHeading="Restaurants Near You"
      data={restaurants}
      renderItem={({ item }) => (
        <RestaurantCard
          onPress={() =>
            navigation.navigate("Restaurant", {
              title: item.title,
              restaurantId: item.id,
            })
          }
          data={item}
        />
      )}
      keyExtractor={(item) => item.id}
      navText="View all"
      onNav={onNav}
    />
  );
};

export default RestaurantNearSection;

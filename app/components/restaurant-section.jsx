import { useNavigation } from "@react-navigation/native";
import React from "react";
import HorizontalSection from "./horizontal-section";
import RestaurantCard from "./restaurant-card";

const RestaurantSection = ({
  sectionHeading,
  restaurants,
  navText,
  onNav = () => {},
}) => {
  const navigation = useNavigation();

  return (
    <HorizontalSection
      sectionHeading={sectionHeading}
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
      navText={navText}
      onNav={onNav}
    />
  );
};

export default RestaurantSection;

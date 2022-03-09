import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CategoriesSection from "../components/category-section";
import OfferSection from "../components/offer-section";
import AppTextInput from "../components/text-input";
import Screen from "./Screen";
import useData from "../hooks/useData";
import RestaurantSection from "../components/restaurant-section";

const HomeScreen = ({ navigation }) => {
  const { getRestaurants, getTrendingRestaurants } = useData();
  const trendingRestaurants = getTrendingRestaurants();
  const allRestaurants = getRestaurants();

  return (
    <Screen>
      <ScrollView style={styles.screen}>
        <View style={styles.searchContainer}>
          <AppTextInput placeholder="Search anything here" icon="magnify" />
        </View>

        <OfferSection />

        <RestaurantSection
          navText="View all"
          restaurants={allRestaurants}
          sectionHeading="Restaurants Near You"
          onNav={() =>
            navigation.navigate("RestaurantListings", {
              title: "Restaurants Near You",
              restaurants: allRestaurants,
            })
          }
        />

        <CategoriesSection />

        <RestaurantSection
          navText="See more"
          restaurants={trendingRestaurants}
          sectionHeading="Trending Restaurants"
          onNav={() =>
            navigation.navigate("RestaurantListings", {
              title: "Trending Restaurants",
              restaurants: trendingRestaurants,
            })
          }
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingBottom: 24,
  },
  searchContainer: {
    marginTop: 24,
    width: "90%",
    alignSelf: "center",
  },
});

export default HomeScreen;

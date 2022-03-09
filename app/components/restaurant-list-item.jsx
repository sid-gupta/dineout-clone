import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CuisineList from "./cuisine-list";
import Rating from "./rating";

const RestaurantListItem = ({ onPress, restaurant }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: restaurant.image }} />
        {/* <View style={styles.detailsBox}> */}
        <View style={styles.detailsContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>{restaurant.title}</Text>
            <View style={styles.ratingContainer}>
              <Rating rating={restaurant.rating.toString()} />
            </View>
          </View>
          <View style={styles.subheader}>
            <Text numberOfLines={1} style={styles.location}>
              {restaurant.location}
            </Text>
            <Text style={styles.price}>{restaurant.cost}</Text>
          </View>
          <View style={styles.cuisines}>
            <CuisineList cuisines={restaurant.cuisines} />
          </View>
          <Text numberOfLines={1} style={styles.offerLine}>
            Flat 10% off the Total Bill on something else as well
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    height: 300,
    alignItems: "center",
  },
  cuisines: {
    marginTop: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subheader: {
    marginTop: 6,
    flexDirection: "row",
  },
  location: {
    fontSize: 12,
    color: "grey",
    flex: 4,
  },
  price: {
    fontSize: 12,
    color: "grey",
    flex: 1,
  },
  detailsContainer: {
    padding: 12,
    backgroundColor: "white",
    width: "95%",
    height: "40%",
    borderRadius: 12,
    position: "absolute",
    top: "55%",
  },
  image: {
    width: "100%",
    height: "60%",
    borderRadius: 12,
  },
  title: {
    flex: 4,
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 12,
    color: "grey",
    marginBottom: 3,
  },
  offerLine: {
    fontSize: 12,
    fontWeight: "bold",
    color: "green",
    marginTop: 6,
  },
  ratingContainer: {
    flex: 1,
  },
});

export default RestaurantListItem;

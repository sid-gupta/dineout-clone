import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Rating from "./rating";

const RestaurantCard = ({ data, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        {/* <Image style={styles.image} source={{ uri: data.image }} /> */}
        <Image style={styles.image} source={{ uri: data.image }} />
        <View style={styles.detailsContainer}>
          <View style={styles.ratingContainer}>
            <Rating />
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {data.location}
          </Text>
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
    backgroundColor: "white",
    overflow: "hidden",
    height: 300,
    width: 200,
    borderWidth: 1,
    borderColor: "lightgrey",
    elevation: 3,
  },
  detailsContainer: {
    padding: 18,
    paddingLeft: 12,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  title: {
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
  },
  ratingContainer: {
    position: "absolute",
    top: -12,
    left: 9,
  },
});

export default RestaurantCard;

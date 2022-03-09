import React from "react";
import { View, StyleSheet, Image } from "react-native";

const OfferCard = ({ id, image }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          // uri: "https://picsum.photos/150/200",
          uri: image,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 120,
    width: 100,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "lightgrey",
    elevation: -1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default OfferCard;

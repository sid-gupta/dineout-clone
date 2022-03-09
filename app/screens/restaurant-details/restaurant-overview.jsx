import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
} from "react-native";
import ActionItem from "../../components/ActionItem";
import CuisineList from "../../components/cuisine-list";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RestaurantContext from "../../context/restaurtant";

const RestaurantAbout = ({ iconName, title, subTitle }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 24 }}>
      <MaterialCommunityIcons name={iconName} size={32} color="tomato" />
      <View style={{ marginLeft: 12, flexDirection: "column", flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
        <Text style={{ color: "grey", fontSize: 15, marginTop: 6 }}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

const RestaurantOverview = () => {
  const { restaurant } = useContext(RestaurantContext);
  const [expandDescription, setExpandDescription] = useState(false);
  const expandLinkText = expandDescription ? "Read Less" : "Read More";

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: restaurant.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.restaurantName}>{restaurant.title}</Text>
        <Text style={styles.restaurantAddress}>{restaurant.location}</Text>
        <View style={styles.priceCuisineContainer}>
          <Text style={styles.cost}>{restaurant.cost}</Text>
          <MaterialCommunityIcons
            name="circle"
            size={4}
            color="grey"
            style={{ marginRight: 6 }}
          />

          <View style={{ width: "70%" }}>
            <CuisineList cuisines={restaurant.cuisines} />
          </View>
        </View>
      </View>

      <View style={styles.actionItemContainer}>
        <ActionItem
          title="Pay Bill"
          subTitle="Save Extra 10% using PromoCash"
          IconComponent={
            <MaterialCommunityIcons
              name="cash-register"
              size={24}
              color="tomato"
            />
          }
        />
      </View>

      <View style={styles.actionItemContainer}>
        <ActionItem
          title="Reserve a Table"
          // subTitle="Save Extra 10% using PromoCash"
          IconComponent={
            <MaterialCommunityIcons
              name="table-chair"
              size={24}
              color="tomato"
            />
          }
        />
      </View>

      <View style={styles.actionItemContainer}>
        <ActionItem
          title="Stories"
          subTitle="Capture memories and be the first one to upload a store here."
          IconComponent={
            <MaterialCommunityIcons
              name="human-greeting"
              size={32}
              color="tomato"
            />
          }
        />
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About</Text>
        <View style={styles.aboutTextContainer}>
          <Text
            style={styles.aboutText}
            numberOfLines={expandDescription ? 0 : 2}
          >
            {restaurant.description}
          </Text>
          <Text
            onPress={() => setExpandDescription((d) => !d)}
            style={styles.readMoreLink}
          >
            {expandLinkText}
          </Text>
        </View>

        <RestaurantAbout
          iconName="food"
          title="Cuisine"
          subTitle={restaurant.cuisines.join(", ")}
        />

        <RestaurantAbout
          iconName="silverware-fork-knife"
          title="Establishment Type"
          subTitle={restaurant.establishmentType}
        />

        <RestaurantAbout
          iconName="heart"
          title="Must Try"
          subTitle="North Indian, American, Tarkari masaledar, butter chicken"
        />

        <RestaurantAbout
          iconName="cash"
          title="Average Cost"
          subTitle={restaurant.cost}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  aboutTextContainer: {
    marginTop: 15,
  },
  aboutText: {
    fontSize: 15,
    color: "grey",
  },
  imageContainer: {
    alignSelf: "center",
    marginBottom: 24,
    width: "100%",
  },
  image: {
    height: 240,
    width: "100%",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  restaurantAddress: {
    fontSize: 15,
    color: "grey",
  },
  priceCuisineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  cost: {
    fontSize: 12,
    marginRight: 6,
  },
  container: {},
  detailsContainer: {
    borderRadius: 12,
    backgroundColor: "white",
    padding: 12,
    width: "90%",
    alignSelf: "center",
  },
  actionItemContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 24,
    elevation: 2,
    borderRadius: 12,
    overflow: "hidden",
  },
});

export default RestaurantOverview;

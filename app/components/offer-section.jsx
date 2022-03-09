import React from "react";
import { View } from "react-native";
import useData from "../hooks/useData";
import HorizontalSection from "./horizontal-section";
import OfferCard from "./offer-card";

const OfferSection = () => {
  const { getOffers } = useData();
  const offers = getOffers();

  return (
    <View>
      <HorizontalSection
        sectionHeading="Best Offers"
        data={offers}
        renderItem={({ item }) => <OfferCard {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default OfferSection;

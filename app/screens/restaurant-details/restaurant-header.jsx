import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

const Header = ({ height }) => {
  const navigation = useNavigation();
  return (
    <Image
      source={{
        uri: "https://api.lorem.space/image/furniture?w=150&h=150",
        width: 150,
        height: 150,
      }}
    />
  );
};

export default Header;

import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const DefaultHorizontalSeparator = () => {
  return <View style={styles.defaultHorizontalSeparator} />;
};

const DefaultVerticalSeparator = () => {
  return <View style={styles.defaultVerticalSeparator} />;
};

const HorizontalSection = ({
  sectionHeading,
  data,
  renderItem,
  keyExtractor,
  navText = null,
  onNav = () => {},
  horizontal = true,
  ItemSeparatorComponent = null,
}) => {
  const separator =
    ItemSeparatorComponent || horizontal
      ? DefaultHorizontalSeparator
      : DefaultVerticalSeparator;
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeading}>{sectionHeading}</Text>
        {navText && (
          <Text onPress={onNav} style={styles.headerNavLink}>
            {navText}
          </Text>
        )}
      </View>
      <FlatList
        horizontal={horizontal}
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerNavLink: {
    color: "tomato",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
  },
  separator: {
    width: 10,
  },
  defaultHorizontalSeparator: {
    width: 10,
  },
  defaultVerticalSeparator: {
    height: 15,
    width: "100%",
  },
});

export default HorizontalSection;

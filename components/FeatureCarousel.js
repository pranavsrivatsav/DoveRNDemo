import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QuickQuoteFeatureCard from "../assets/images/quickQuoteFeatureCard.svg";

const featuresArray = [
  {
    featureTitle: "Get Lightning Quick Quotes",
    renderImage: () => <QuickQuoteFeatureCard width={123} />,
  },
  {
    featureTitle: "Get Lightning Quick Quotes 2",
    renderImage: () => <QuickQuoteFeatureCard width={123} />,
  },
  {
    featureTitle: "Get Lightning Quick Quotes 3",
    renderImage: () => <QuickQuoteFeatureCard width={123} />,
  },
];

const FeatureCarousel = () => {
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.featureTitle}</Text>
        {item.renderImage()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
    </View>
  );
};

export default FeatureCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Cabin_400Regular",
    fontSize: 20,
  },
});

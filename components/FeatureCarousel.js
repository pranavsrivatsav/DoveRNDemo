import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import QuickQuoteFeatureCard from "../assets/images/quickQuoteFeatureCard.svg";
import SaveAndShareFeatureCard from "../assets/images/saveAndShareFeatureCard.svg"
import { useSharedValue } from "react-native-reanimated";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import colors from "../constants/colors";

const featuresArray = [
  {
    featureTitle: "Get Lightning Quick Quotes",
    renderImage: () => <QuickQuoteFeatureCard width={123} />,
  },
  {
    featureTitle: "Save and Share Quote Lists",
    renderImage: () => <SaveAndShareFeatureCard width={123} />,
  },
  {
    featureTitle: "Get Lightning Quick Quotes 3",
    renderImage: () => <QuickQuoteFeatureCard width={123} />,
  },
];

const FeatureCarousel = () => {
  const width = Dimensions.get("window").width;
  const ref = React.useRef(null);
  const progress = useSharedValue(0);

  const onPressPagination = (index) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        {item.renderImage()}
        <Text style={styles.featureTitle}>{item.featureTitle}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ height: width / 2 }}>
        <Carousel
          ref={ref}
          width={width}
          height={width / 2}
          data={featuresArray}
          onProgressChange={progress}
          renderItem={renderItem}
          autoPlay
          autoPlayInterval={3000}
          scrollAnimationDuration={650}
        />
      </View>

      <Pagination.Basic
        progress={progress}
        data={featuresArray}
        dotStyle={styles.paginationDotStyle}
        activeDotStyle={{...styles.paginationDotStyle, ...styles.paginationActiveDotStyle}}
        containerStyle={styles.paginationContainerStyle}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default FeatureCarousel;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  featureTitle: {
    fontFamily: "Cabin_400Regular",
    fontSize: 24,
    color: colors.primaryTextColor,
  },
  paginationDotStyle: {
    backgroundColor: colors.secondaryColor2,
    borderColor: colors.primaryColor,
    borderRadius: 50,
    borderWidth: 0.5,
    width: 18,
    height: 18
  },
  paginationActiveDotStyle: {
    backgroundColor: colors.primaryColor,
  },
  paginationContainerStyle: { gap: 20, marginTop: 20 },
});

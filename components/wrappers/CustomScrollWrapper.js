import { StyleSheet, Text, View, Animated, ScrollView } from "react-native";
import React, { useRef, useState } from "react";

const CustomScrollWrapper = ({ children, forceShowScrollBar = false }) => {
  //Visible height of the component
  const [visibleHeight, setVisibleHeight] = useState(new Animated.Value(0));

  //Actual height of the component
  const [contentHeight, setContentHeight] = useState(new Animated.Value(1));
  const offset = useRef(new Animated.Value(0)).current;

  //Get the scroll indicator height
  const scrollIndicatorHeight =
    contentHeight > visibleHeight
      ? visibleHeight * (visibleHeight / contentHeight)
      : visibleHeight > contentHeight
      ? contentHeight
      : visibleHeight;

  //constant to use as extrapolation max
  //which will be used to place the scroll indicator
  //inside scroll bar, so basically this will be the max
  //scroll indicator position offset inside the scroll bar
  const maxScrollIndicatorPosition =
    visibleHeight > scrollIndicatorHeight
      ? visibleHeight - scrollIndicatorHeight
      : 0;

  const showScrollBar = contentHeight > visibleHeight;
  return (
    <View style={{ flexDirection: "row" }}>
      <ScrollView
        //using onContentSizeChange to get the actual content height
        onContentSizeChange={(w, h) => {
          setContentHeight(h);
        }}
        //using onLayout to get the visible layout Height
        onLayout={(e) => {
          const layout = e.nativeEvent.layout;
          const { height } = layout;
          setVisibleHeight(height);
        }}
        //using onScroll to get the vertical offset
        //this will be used to place the scroll indicator
        //accurately inside the scroll bar container
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          {
            // listener: (e) => console.log("onScroll event", e),
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      {showScrollBar && (
        <View style={styles.scrollContainer}>
          <Animated.View
            style={[
              styles.scrollIndicator,
              {
                height: scrollIndicatorHeight,
                transform: [
                  {
                    translateY: interpolateAndGetScrollPosition(),
                  },
                ],
              },
            ]}
          />
        </View>
      )}
    </View>
  );

  function interpolateAndGetScrollPosition() {
    const scrollPosition = Animated.multiply(
      offset,
      visibleHeight / contentHeight
    ).interpolate({
      inputRange: [0, maxScrollIndicatorPosition],
      outputRange: [0, maxScrollIndicatorPosition],
      extrapolate: "clamp",
    });
    return scrollPosition;
  }
};

export default CustomScrollWrapper;

const styles = StyleSheet.create({
  scrollContainer: {
    width: 6,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  scrollIndicator: {
    width: 4,
    backgroundColor: "blue",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HorizontalDivider = ({
  height,
  color,
  marginVertical,
  marginHorizontal,
}) => {
  const styles = makeStyles({
    height,
    color,
    marginVertical,
    marginHorizontal,
  });
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
    </View>
  );
};

export default HorizontalDivider;

function makeStyles({ height, color, marginHorizontal, marginVertical }) {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: [undefined, null].includes(marginHorizontal)
        ? 0
        : marginHorizontal,
      marginVertical: [undefined, null].includes(marginVertical)
        ? 0
        : marginVertical,
    },
    divider: {
      height: height || 1,
      backgroundColor: color || "black",
    },
  });

  return styles;
}

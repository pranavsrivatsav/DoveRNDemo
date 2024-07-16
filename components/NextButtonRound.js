import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import NextButtonArrow from '../assets/images/nextButtonArrow.svg'

const NextButtonRound = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require("../assets/images/nextButtonArrow.svg")}
        style={{ width: 13, height: 40}}
      /> */}
      <NextButtonArrow width={13}/>
    </View>
  );
};

export default NextButtonRound;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OutlineInput from "./OutlineInput";
import NextButtonRound from "./NextButtonRound";
import FeatureCarousel from "./FeatureCarousel";

const NextButton = () => {
  return (
    <View style={styles.nextButtonContainer}>
      <NextButtonRound />
    </View>
  );
};

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <OutlineInput label={"Mobile Number"} />
      <NextButton />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nextButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

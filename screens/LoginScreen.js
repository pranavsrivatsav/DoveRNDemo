import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Header from "../components/Header";
import colors from "../constants/colors";
import LoginForm from "../components/LoginForm";
import FeatureCarousel from "../components/FeatureCarousel";

const LoginScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <LoginContent />
    </View>
  );
};

const LoginContent = () => {
  return (
    <View style={styles.contentContainer}>
      <LoginForm />
      <FeatureCarousel />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 175
  },
});

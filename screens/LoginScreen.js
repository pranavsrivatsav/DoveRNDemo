import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Header from "../components/Header";
import colors from "../constants/colors";
import LoginForm from "../components/LoginForm";
import FeatureCarousel from "../components/FeatureCarousel";
import { useSelector } from "react-redux";
import Otp from "../components/Otp";

const LoginScreen = ({ navigation }) => {
  const pageNo = useSelector(state => state.login.pageNo);

  console.log("pageNo", pageNo)

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      { pageNo === 1 && <LoginContent />}
      { pageNo === 2 && <Otp />}
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
    marginBottom: Keyboard.isVisible() ? 50 : 175,
  },
});

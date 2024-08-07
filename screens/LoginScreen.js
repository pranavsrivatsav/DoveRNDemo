import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import FeatureCarousel from "../components/FeatureCarousel";
import { useDispatch, useSelector } from "react-redux";
import Otp from "../components/Otp";
import {
  gotoPrevPage,
  setOtpError,
  showLoader,
  removeLoader,
} from "../store/slices/loginSlice";
import useKeyboardStatus from "../customHooks/useKeyboardStatus";
import Loader from "../components/Loader";

const LoginScreen = ({ navigation }) => {
  const { pageNo, mobileNumber, loading, loadingMessage, otpError } =
    useSelector((state) => state.login);
  const dispatch = useDispatch();
  const keyboardStatus = useKeyboardStatus();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={[
        styles.container,
        { marginBottom: keyboardStatus === "open" ? 50 : 175 },
      ]}
    >
      {loading && <Loader message={loadingMessage} />}
      <Header
        title={"LOGIN OR REGISTER"}
        showBackButton={pageNo === 2}
        onBackPress={() => dispatch(gotoPrevPage())}
      />
      {pageNo === 1 && <LoginContent />}
      {pageNo === 2 && <Otp {...getPropsForOtp()} />}
    </View>
  );

  function getPropsForOtp() {
    return {
      mobileNumber,
      otpLength: 4,
      onResend: async () => {
        dispatch(showLoader('Resending Otp...'))
        await delay(2000);
        dispatch(removeLoader());
      },
      onSubmit: async (value) => {
        dispatch(showLoader('Verifying Otp...'))
        dispatch
        await delay(2000);
        if (value !== "4444") {
          dispatch(setOtpError("Invalid OTP. Please try again"));
        }
        dispatch(removeLoader(false));
      },
      otpError: otpError,
      setOtpError: (error) => {
        dispatch(setOtpError(error));
      },
    };
  }
};

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
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
  },
});

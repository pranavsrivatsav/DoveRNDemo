import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import FeatureCarousel from "../components/FeatureCarousel";
import { useDispatch, useSelector } from "react-redux";
import Otp from "../components/Otp";
import { gotoPrevPage, setOtpError, setOtpLoading } from "../store/slices/loginSlice";
import useKeyboardStatus from "../customHooks/useKeyboardStatus";

const LoginScreen = ({ navigation }) => {
  const {pageNo, mobileNumber, otpLoading, otpError} = useSelector(state => state.login);
  const dispatch = useDispatch();
  const keyboardStatus = useKeyboardStatus();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={[styles.container, {marginBottom: keyboardStatus === 'open' ? 50 : 175}]}>
      <Header title={'LOGIN OR REGISTER'} showBackButton={pageNo === 2} onBackPress={()=>dispatch(gotoPrevPage())}/>
      { pageNo === 1 && <LoginContent />}
      { pageNo === 2 && <Otp {...getPropsForOtp()} />}
    </View>
  );

  function getPropsForOtp() {
    return {
      mobileNumber,
      otpLength: 4,
      onResend: async ()=> {
        console.log("resending otp");
        dispatch(setOtpLoading(true));
        await delay(2000);
        dispatch(setOtpLoading(false));
      },
      onSubmit: async (value)=>{
        console.log("submitting otp")
        dispatch(setOtpLoading(true));
        await delay(2000);
        if(value !== '4444') {
          dispatch(setOtpError('Invalid OTP. Please try again'));
        }
        dispatch(setOtpLoading(false));
      },
      otpError: otpError,
      setOtpError: (error)=>{dispatch(setOtpError(error))},
      loading: otpLoading
    }
  }
};

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
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

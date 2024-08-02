import { KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import OutlineInput from "./OutlineInput";
import NextButtonRound from "./NextButtonRound";
import { useDispatch, useSelector } from "react-redux";
import { gotoNextPage, setMobileNumber } from "../store/slices/loginSlice";

const NextButton = ({onPress}) => {
  return (
    <Pressable style={styles.nextButtonContainer} onPress={onPress}>
      <NextButtonRound />
    </Pressable>
  );
};

const LoginForm = () => {
  const mobileNumber = useSelector((state) => state.login.mobileNumber);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
        <OutlineInput
          label={"Mobile Number"}
          value={mobileNumber}
          onChangeText={(value) => {
            dispatch(setMobileNumber(value));
          }}
        />
      <NextButton onPress={onPressNext}/>
    </View>
  );

  function onPressNext() {
    dispatch(gotoNextPage())
  }
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nextButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
});

import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import OutlineInput from "./OutlineInput";
import NextButtonRound from "./NextButtonRound";
import colors from "../constants/colors";

const LoginForm = () => {
  const [mobileNumber, setMobileNumber] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [otp, setOtp] = useState();

  return <View style={styles.container}>
    {pageNumber === 1 && <MobileNumberForm onNextPress={onNextPress} mobileNumber={mobileNumber} setMobileNumber={setMobileNumber}/>}
    {pageNumber === 2 && <OtpForm otp={otp} setOtp={setOtp} />}
  </View>;

  function onNextPress() {setPageNumber(2)}

};

const MobileNumberForm = ({onNextPress, mobileNumber, setMobileNumber}) => {
  return (
    <>
      <OutlineInput label={"Mobile Number"} value={mobileNumber} setValue={setMobileNumber}/>
      <NextButton onPress={onNextPress}/>
    </>
  );
};

const NextButton = ({onPress}) => {
  return (
    <View style={styles.nextButtonContainer}>
      <Pressable onPress={onPress}>
        <NextButtonRound />
      </Pressable>
    </View>
  );
};

const OtpForm = ({mobileNumber = '9786451231', otp, setOtp}) => {
  return (
    <>
      <Text style={styles.otpNote}>Please enter the verification code sent to {mobileNumber}</Text>
      <OtpInput otpValue={otp} setOtpValue={setOtp} length={4}/>
    </>
  )
}

const OtpInput = ({otpValue = '1234', setOtpValue, length}) => {
  return (
    <View style={styles.otpInputContainer}>
      {Array(length).fill(undefined).map((item = undefined, index) => <OtpInputBox value={otpValue && otpValue[index]} />)}
    </View>
  )
}

const OtpInputBox = ({value}) => {
  return (
    <View style={styles.otpInputBox}>
      <Text style={styles.otpInputText}>{value}</Text>
    </View>
  )
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nextButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  otpNote: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Cabin_400Regular",
    marginTop: 40
  },
  otpInputContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20
  },
  otpInputBox: {
    height: 59,
    width: 48,
    borderRadius: 10,
    borderColor: colors.primaryColor,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  otpInputText: {
    color: colors.primaryTextColor,
    fontSize: 20
  }
});

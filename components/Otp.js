import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Platform,
  Pressable,
} from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import colors from "../constants/colors";
import useInterval from "../customHooks/useInterval";
import PrimaryButton from "./PrimaryButton";

const Otp = ({mobileNumber, onSubmit, onResend, otpLength=4, otpError, setOtpError, loading, resendDelay=30}) => {
  const [value, setValue] = useState();

  const [resendCountdown, setResendCountdown] = useState(resendDelay);
  const [enableResend, setEnableResend] = useState(false);

  const ref = useBlurOnFulfill({ value, otpLength });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //when delay is null - no new interval will be created (and any existing intervals will be cleared by cleanup funtion)
  useInterval(decreaseCountDown, enableResend ? null : 1000); 

  //useEffect to submit otp
  useEffect(()=>{
    if(value?.length === otpLength) {
      (async()=>{
        await onSubmit();
      })()
    }
  }, [value])

  //useEffect to remove error
  useEffect(()=>{
    setOtpError();
  }, [value && otpError])


  return (
    <View style={styles.root}>
      {renderTitle()}
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={otpLength}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({
          android: "sms-otp",
          default: "one-time-code",
        })}
        testID="my-code-input"
        renderCell={renderOtpCell}
      />
      {renderResend()}
      {loading && <Text>Loading...</Text>}
    </View>
  );

  function renderTitle() {
    return (
      <View>
        <Text style={styles.title}>
          Please enter the verification code sent to
        </Text>
        <Text style={styles.title}>{mobileNumber}</Text>
      </View>
    );
  }

  function renderOtpCell({ index, symbol, isFocused }) {
    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell, otpError && styles.cellError]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </Text>
    );
  }

  function renderResend() {
    return (
      <View style={styles.resendContainer}>
        {!enableResend && (
          <Text>Resend OTP in {resendCountdown} Seconds...</Text>
        )}
        {enableResend && (
          <PrimaryButton onPress={resendOtp}>Resend OTP</PrimaryButton>
        )}
      </View>
    );
  }



  function resetTimer() {
    setValue('');
    setEnableResend(false);
    setResendCountdown(resendDelay);
  }

  async function resendOtp() {
    await onResend();
    resetTimer();
  }

  function decreaseCountDown() {
    if(enableResend) return;
    
    if(resendCountdown <= 1) {
      setEnableResend(true);
      return;
    } 

    setResendCountdown(prevCountdown => prevCountdown -1);
  }
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 15, fontFamily: "Cabin_400Regular" },
  codeFieldRoot: { marginTop: 10, gap: 20, alignSelf: "center" },
  cell: {
    width: 50,
    height: 60,
    lineHeight: 55,
    fontSize: 34,
    borderWidth: 2,
    borderColor: colors.primaryColor,
    borderRadius: 10,
    textAlign: "center",
  },
  focusCell: {
    borderWidth: 3,
    borderColor: colors.primaryColor,
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: 15
  },
  cellError: {
    borderColor: colors.warningColor
  }
});

export default Otp;

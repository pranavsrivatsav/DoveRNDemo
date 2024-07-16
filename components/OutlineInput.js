import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const OutlineInput = ({ placeholder, width, height, label, value  }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={value} enterKeyHint="next" inputMode="tel" maxLength={10} keyboardType="numeric"/>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default OutlineInput;

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    borderColor: colors.primaryColor,
    borderWidth: 3,
    borderRadius: 10, 
    width: '100%',
    height: 70,
    padding: 10,
    fontSize: 28,
    fontFamily: 'Cabin_600SemiBold',
    textAlign: 'center',
    color: colors.primaryColor
  },
  label: {
    fontFamily: 'Cabin_400Regular',
    fontSize: 15,
    textAlign: 'left',
    color: colors.primaryColor,
    alignSelf: 'flex-start'
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

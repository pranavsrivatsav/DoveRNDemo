import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InsurerPreferenceBox from "./InsurerPreferenceBox";
import insurerComponentsMap from "../../constants/insurerComponentMap";

const SelectInsurers = ({ insurers, setSelection }) => {
  return (
    <View style={styles.container}>
      {insurers.map((insurer, index) => {
        const onPress = (isSelected) => setSelection({name: insurer.name, isSelected});
        return (
          <InsurerPreferenceBox
            key={`insurer${index}`}
            selected={insurer.isSelected}
            onPress={onPress}
          >
            {insurerComponentsMap[insurer.name]}
          </InsurerPreferenceBox>
        );
      })}
    </View>
  );
};

export default SelectInsurers;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16
  }
});

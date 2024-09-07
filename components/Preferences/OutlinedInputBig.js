import { Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../constants/colors";
import InputClearButton from "../../assets/images/inputClearButton.svg"

const OutlinedInputBig = ({ placeholder, value, onChange }) => {
  const [isFocused, setIsFocused] = useState();
  const [isPlaceholderShown, setIsPlaceholderShown] = useState(true);

  const styles = createStyles({isFocused, isPlaceholderShown});

  useEffect(() => {
    if (!value || value.length === 0) {
      setIsPlaceholderShown(true);
    } else {
      setIsPlaceholderShown(false)
    }
  }, [value]);

  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <TextInput
        style={[styles.input, isPlaceholderShown && styles.placeholderText]}
        placeholder={placeholder}
        value={value}
        autoCapitalize = {"words"}
        onChangeText={onChange}
        onFocus={()=>{setIsFocused(true)}}
        onBlur={()=>{setIsFocused(false)}}
      />
      {isFocused && value?.length > 0 && <ClearButton onPress={()=>{onChange("")}}/>}
    </View>
  );

  function ClearButton({onPress}) {
    return (
      <Pressable onPress={onPress}>
        <InputClearButton />
      </Pressable>
    )
  }
};

export default OutlinedInputBig;

function createStyles({isFocused, isPlaceholderShown}){
  return StyleSheet.create({
    input: {
      fontFamily: "Cabin_400Regular",
      fontSize: 22,
      color: isPlaceholderShown ? colors.cardBorder : 'black',
      flex: 1,
    },
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderColor: colors.tertiaryDark,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: isFocused ? colors.cardBorder : null,
      marginVertical: 8,
      height: 60
    }
  });
}

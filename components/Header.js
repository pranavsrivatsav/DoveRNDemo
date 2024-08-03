import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import PrevButtonArrow from "../assets/images/prevButtonArrow.svg";

const Header = ({ title, showBackButton, onBackPress }) => {
  return (
    <View style={styles.container}>
      <HeaderControls />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  function HeaderControls() {
    return (
      <View style={styles.headerControlsContainer}>
        {showBackButton && <BackButton/>}
      </View>
    )
  }

  function BackButton() {
    return <Pressable onPress={onBackPress} style={styles.backButtonContainer}>
      <PrevButtonArrow />
    </Pressable>;
  }
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
  },
  title: {
    color: colors.secondaryColor,
    fontSize: 22,
    fontFamily: "Cabin_500Medium",
    marginTop: 10
  },
  headerControlsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    height: 20,
    paddingHorizontal: 20,
  },
  backButtonContainer: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

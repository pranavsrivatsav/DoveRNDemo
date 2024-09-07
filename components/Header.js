import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import PrevButtonArrow from "../assets/images/prevButtonArrow.svg";



const Header = ({ title, showBackButton, onBackPress, height }) => {
  const styles = makeStyles({height})

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

function makeStyles({height}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primaryColor,
      justifyContent: "center",
      alignItems: "center",
      height: height || "20%",
    },
    title: {
      color: colors.secondaryColor,
      fontSize: 24,
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

  return styles;
}

export default Header;

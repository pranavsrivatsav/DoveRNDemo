import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Loader = ({ message }) => {
  return (
    <Modal transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <ActivityIndicator />
          <Text>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: colors.secondaryColor,
    padding: 20,
    borderRadius: 8,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  }
});

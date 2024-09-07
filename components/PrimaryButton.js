import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const PrimaryButton = ({onPress, children}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: colors.secondaryColor
  }
})
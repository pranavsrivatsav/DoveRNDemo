import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login or Register</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
  },
  title: {
    color: colors.secondaryColor,
    fontSize: 22,
    fontFamily: 'Cabin_500Medium'
  }
})
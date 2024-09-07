import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HorizontalDivider from './HorizontalDivider'
import colors from '../constants/colors'

const SectionHeader = ({title, titleStyle}) => {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <HorizontalDivider height={1.25} marginVertical={2.5}/>
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Georama_600SemiBold",
    fontSize: 18,
    color: colors.tertiaryDark
  }
})
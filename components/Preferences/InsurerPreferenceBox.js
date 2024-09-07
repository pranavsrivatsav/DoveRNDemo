import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const InsurerPreferenceBox = ({children, selected, onPress}) => {
  if(!children) return <></>
  return (
    <Pressable style={[styles.container, selected && styles.selected]} onPress={() => onPress(!selected)}>
      {children}
    </Pressable>
  )
}

export default InsurerPreferenceBox

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: '#FED9D9',
    borderColor: '#CBBBBB',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  selected: {
    backgroundColor: '#D3C7C7',
    borderColor: colors.primaryColor,
    borderWidth: 2,
  }
})
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import colors from '../constants/colors'
import LoginForm from '../components/LoginForm'

const LoginScreen = ({navigation}) => {

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  
  return (
    <View style={styles.container}>
      <Header />
      <LoginForm />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
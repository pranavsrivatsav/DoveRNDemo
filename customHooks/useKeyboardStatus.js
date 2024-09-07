import { Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const useKeyboardStatus = () => {
  const [keyboardStatus, setKeyboardStatus] = useState('close');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('open');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('close');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return keyboardStatus;
}

export default useKeyboardStatus;
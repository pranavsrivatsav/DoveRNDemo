import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./screens/LoginScreen";
import { Cabin_500Medium, Cabin_400Regular, Cabin_600SemiBold } from "@expo-google-fonts/cabin";
import { Georama_600SemiBold } from "@expo-google-fonts/georama"
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Preferences from "./screens/Preferences";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [loaded, error] = useFonts({
    Cabin_500Medium,
    Cabin_400Regular,
    Cabin_600SemiBold,
    Georama_600SemiBold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Preferences">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Preferences" component={Preferences} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

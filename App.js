import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigator/MainNavigator";
// import HomeScreen from "./src/screens/HomeScreen";
// import GuessTheCountryScreen from "./src/screens/GuessTheCountryScreen";
import WinScreen from "./src/screens/WinScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator/>
    </SafeAreaProvider>
  )
};

export default App;
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChallangeScreen from './src/screens/FirstScreen';
import FirstScreen from './src/screens/FirstScreen'
// import ChallangeScreen from './src/screens/FirstScreen';
// import SecondScreen from './src/screens/SecondScreen';
// import ChallangeScreen from './src/screens/SecondScreen';
// import ThirdScreen from './src/screens/ThirdScreen';
// import AddImage from './src/screens/ThirdScreen';
// import ChallangeScreen from './src/screens/ThirdScreen';
// import FourthScreen from './src/screens/FourthScreen';
// import ChallangeScreen from './src/screens/FourthScreen';
import InstagramHomeScreen from './src/screens/InstagramHomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
    <InstagramHomeScreen/>
    </SafeAreaProvider>
  )
}

export default App;
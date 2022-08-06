import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GuessTheCountryScreen from "../screens/GuessTheCountryScreen";
import WinScreen from "../screens/WinScreen";
import GameOverScene from "../screens/GameOverScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GameOver">
                <Stack.Screen
                    name="Home"
                    component={GuessTheCountryScreen}
                    options={{ headerShown: false}}/>
                <Stack.Screen
                    name="Win"
                    component={WinScreen}
                    options={{ headerShown: false}}/>
                <Stack.Screen
                    name="GameOver"
                    component={GameOverScene}
                    options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainNavigator;
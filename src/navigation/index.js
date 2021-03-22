import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Text } from "react-native"

import FlashMessage from "react-native-flash-message";

import RootTabbedNavigator from "./rootTabs";

const Stack = createStackNavigator()

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStackNavigator />
            <FlashMessage position="bottom" />
        </NavigationContainer>
    )
}

function RootStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="root" component={RootTabbedNavigator} />
        </Stack.Navigator>
    )
}

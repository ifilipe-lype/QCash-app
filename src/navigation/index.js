import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Text } from "react-native"

import RootTabbedNavigator from "./rootTabs";

const Stack = createStackNavigator()

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStackNavigator />
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

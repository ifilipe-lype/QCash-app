import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

import HomeScreen from "../screens/Home";
import IncomeScreen from "../screens/Incomes";
import OutcomeScreen from "../screens/Outcomes";


import Colors from "../constants/colors";

import { Entypo, Feather } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export default function RootTabbedNavigator() {
    return (
        <Tabs.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: "white",
                    height: 48,
                    elevation: 0
                }
            }}
        >
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="home" size={focused ? 28 : 24} color={focused ? `rgb(${Colors.blueRGB})` : `rgb(${Colors.grayRGB})`} />
                    )
                }}
                name="Home"
                component={HomeScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name="corner-left-up"  size={focused ? 28 : 24} color={focused ? `rgb(${Colors.greenRGB})` : `rgb(${Colors.grayRGB})`} />
                    )
                }}
                name="Incomes"
                component={IncomeScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name="corner-right-down" size={focused ? 28 : 24} color={focused ? `rgb(${Colors.redRGB})` : `rgb(${Colors.grayRGB})`} />
                    )
                }}
                name="Outcomes"
                component={OutcomeScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name="more-horizontal" size={focused ? 28 : 24} color={focused ? `rgb(${Colors.blueRGB})` : `rgb(${Colors.grayRGB})`} />
                    )
                }}
                name="MenuBar"
                component={MenuBar}
            />
        </Tabs.Navigator>
    )
};

function MenuBar() {
    return (
        <View>
            <Text>
                Hello, MenuBar!
            </Text>
        </View>
    )
}

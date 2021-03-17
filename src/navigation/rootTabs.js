import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

import HomeScreen from "../screens/Home";


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
                    elevation: 0
                }
            }}
        >
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="home" size={focused ? 28 : 24} color={focused ? `rgb(${Colors.blueRgbValue})` : `rgb(${Colors.grayRgbValue})`} />
                    )
                }}
                name="Home"
                component={HomeScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="list" size={focused ? 28 : 24} color={focused ? `rgb(${Colors.blueRgbValue})` : `rgb(${Colors.grayRgbValue})`} />
                    )
                }}
                name="Transation"
                component={Transations}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name="search" size={focused ? 28 : 24} color={focused ? `rgb(${Colors.blueRgbValue})` : `rgb(${Colors.grayRgbValue})`} />
                    )
                }}
                name="Search"
                component={Search}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name="more-horizontal" size={focused ? 28 : 24} color={focused ? `rgb(${Colors.blueRgbValue})` : `rgb(${Colors.grayRgbValue})`} />
                    )
                }}
                name="MenuBar"
                component={MenuBar}
            />
        </Tabs.Navigator>
    )
};

function Transations() {
    return (
        <View>
            <Text>
                Hello, Transations!
            </Text>
        </View>
    )
}

function Search() {
    return (
        <View>
            <Text>
                Hello, Search!
            </Text>
        </View>
    )
}

function MenuBar() {
    return (
        <View>
            <Text>
                Hello, MenuBar!
            </Text>
        </View>
    )
}

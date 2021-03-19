import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "../../constants";


import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from "./styles";

export default function IncomeScreen() {

    const [showDoneEntries, setShowDoneEntries] = useState(true);
    const [showNotDoneEntries, setNotShowDoneEntries] = useState(true);

    function toogleVisibility(doneEntries){
        if(doneEntries){
            setShowDoneEntries(!showDoneEntries);
        } else {
            setNotShowDoneEntries(!showNotDoneEntries);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.screenLabel}>Ganhos de Março, 2021</Text>

                <View style={styles.headerRightActions}>
                    <TouchableOpacity style={styles.headerAction}>
                        <Feather name="search" size={20} color="rgba(0,0,0, .65)" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.headerAction, { paddingRight: 0 }]}>
                        <Entypo name="add-to-list" size={20} color="rgba(0,0,0, .65)" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.incomes}>
                <View style={styles.incomeResults}>
                    <TouchableOpacity onPress={() => toogleVisibility(true)} style={styles.incomeResult}>
                        {
                            showDoneEntries ? (
                                <MaterialCommunityIcons name="calendar-check-outline" size={28} color="rgba(0,0,0, .65)" />
                            ) : (
                                <MaterialCommunityIcons name="eye-off-outline" size={28} color="rgba(0,0,0, .35)" />
                            )
                        }
                        <View style={{
                            marginLeft: 6
                        }}>
                            <Text style={styles.resultLabel}>Efetuados</Text>
                            <Text style={{
                                fontSize: 15,
                                color: `rgb(${Colors.greenRGB})`
                            }}>645,000 kz</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toogleVisibility(false)} style={styles.incomeResult}>
                        {
                            showNotDoneEntries ? (
                                <MaterialCommunityIcons name="calendar-blank-outline" size={28} color="rgba(0,0,0, .65)" />
                            ) : (
                                <MaterialCommunityIcons name="eye-off-outline" size={28} color="rgba(0,0,0, .35)" />
                            )
                        }
                        <View style={{
                            marginLeft: 6
                        }}>
                            <Text style={styles.resultLabel}>Por efetuar</Text>
                            <Text style={styles.resultAmount}>145,000 kz</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

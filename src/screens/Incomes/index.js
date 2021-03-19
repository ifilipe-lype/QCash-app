import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlightBase } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from "./styles";

export default function IncomeScreen() {
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
                <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: 12,
                        borderBottomWidth: 1,
                        borderColor: "rgba(0,0,0, .05)"
                    }}>
                    <TouchableOpacity style={styles.incomeResult}>
                        <MaterialCommunityIcons name="calendar-check-outline" size={32} color="rgba(0,0,0, .65)" />
                        <View style={{
                            marginLeft: 6
                        }}>
                            <Text style={styles.resultLabel}>Efetuados</Text>
                            <Text style={{
                                fontSize: 15,
                                color: "green"
                            }}>645,000 kz</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.incomeResult}>
                        <MaterialCommunityIcons name="calendar-blank-outline" size={32} color="rgba(0,0,0, .65)" />
                        <View style={{
                            marginLeft: 6
                        }}>
                            <Text style={styles.resultLabel}>Por efetuar</Text>
                            <Text>145,000 kz</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

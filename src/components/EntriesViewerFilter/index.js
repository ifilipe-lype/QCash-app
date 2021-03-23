import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import styles from "./styles";

export default function EntriesViewerFilter({
    isIncome,
    showDoneEntries,
    showNotDoneEntries,
    toogleDoneVisibility,
    toogleNotDoneVisibility,

    doneEntriesAmount,
    notDoneEntriesAmout,
}) {

    console.log(doneEntriesAmount, notDoneEntriesAmout)

    return (
        <View style={styles.container(isIncome)}>
            <TouchableOpacity onPress={toogleDoneVisibility} style={styles.entryResult}>
                {
                    showDoneEntries ? (
                        <MaterialCommunityIcons name="calendar-check-outline" size={28} color="white" />
                    ) : (
                        <MaterialCommunityIcons name="eye-off-outline" size={28} color="rgba(0,0,0, .35)" />
                    )
                }
                <View style={{
                    marginLeft: 6
                }}>
                    <Text style={styles.label}>Efetuados</Text>
                    <Text style={styles.amount}>{doneEntriesAmount}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={toogleNotDoneVisibility} style={styles.entryResult}>
                {
                    showNotDoneEntries ? (
                        <MaterialCommunityIcons name="calendar-blank-outline" size={28} color="white" />
                    ) : (
                        <MaterialCommunityIcons name="eye-off-outline" size={28} color="rgba(0,0,0, .35)" />
                    )
                }
                <View style={{
                    marginLeft: 6
                }}>
                    <Text style={styles.label}>Por efetuar</Text>
                    <Text style={styles.amount}>{notDoneEntriesAmout}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

import React, { useState, useEffect } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import styles from "./styles";
import { calcTotalAmount, getSeparatedIncomes } from "../../utils";

export default function EntriesFilter({
    isIncome,
    entries,
    setEntriesToShow
}) {

    const [doneEntries, notDoneEntries] = getSeparatedIncomes(entries);

    const doneEntriesAmount = calcTotalAmount(doneEntries);
    const notDoneEntriesAmount = calcTotalAmount(notDoneEntries);


    const [showDoneEntries, setShowDoneEntries] = useState(true);
    const [showNotDoneEntries, setNotShowDoneEntries] = useState(true);

    function toogleDoneVisibility() {
        setShowDoneEntries(!showDoneEntries);
        filterEntriesToShow(!showDoneEntries, showNotDoneEntries)
    }

    function toogleNotDoneVisibility() {
        setNotShowDoneEntries(!showNotDoneEntries);
        filterEntriesToShow(showDoneEntries, !showNotDoneEntries);
    }


    function filterEntriesToShow(showDoneEntries, showNotDoneEntries) {
        if (showDoneEntries && showNotDoneEntries) {
            setEntriesToShow(entries);
        } else if (!showDoneEntries && showNotDoneEntries) {
            setEntriesToShow(notDoneEntries);
        } else if (showDoneEntries && !showNotDoneEntries) {
            setEntriesToShow(doneEntries);
        } else {
            setEntriesToShow([])
        }
    }

    useEffect(() => {
        filterEntriesToShow(showDoneEntries, showNotDoneEntries);
    }, [entries])

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
                    <Text style={styles.amount}>{notDoneEntriesAmount}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

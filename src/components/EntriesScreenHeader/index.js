import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Entypo, Feather } from '@expo/vector-icons';

import { Colors, monthsLabel } from "../../constants";

import styles from "./styles";

export default function EntriesScreenHeader({ isIncome, month, year, setShowAddEntryForm }) {
    const title = `${isIncome ? "Ganhos" : "Despesas"} de ${monthsLabel[month]}, ${year}`;
    return (
        <View style={styles.header}>
            <Text style={styles.screenLabel}>{title}</Text>

            <View style={styles.headerRightActions}>
                {/* <TouchableOpacity style={styles.headerAction}>
                    <Feather name="search" size={20} color="rgba(0,0,0, .35)" />
                </TouchableOpacity> */}
                <TouchableOpacity
                    style={[styles.headerAction, { paddingRight: 0 }]}
                    onPress={() => setShowAddEntryForm(true)}
                >
                    <Entypo name="add-to-list" size={24} color={`rgb(${isIncome ? Colors.greenRGB : Colors.redRGB})`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

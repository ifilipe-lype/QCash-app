import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from '@expo/vector-icons';

import Entry from "../../components/Entry";
import EntriesViewerFilter from "../../components/EntriesViewerFilter";

import styles from "./styles";

import fakeData from "./fakeOutcomesData";

export default function OutcomeScreen() {

    const [showDoneEntries, setShowDoneEntries] = useState(true);
    const [showNotDoneEntries, setNotShowDoneEntries] = useState(true);

    function toogleDoneVisibility() {
        setShowDoneEntries(!showDoneEntries);
    }

    function toogleNotDoneVisibility() {
        setNotShowDoneEntries(!showNotDoneEntries);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.screenLabel}>Despesas de Março, 2021</Text>

                <View style={styles.headerRightActions}>
                    <TouchableOpacity style={styles.headerAction}>
                        <Feather name="search" size={20} color="rgba(0,0,0, .35)" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.headerAction, { paddingRight: 0 }]}>
                        <Entypo name="add-to-list" size={20} color="rgba(0,0,0, .35)" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.entries}>
                <EntriesViewerFilter
                    showDoneEntries={showDoneEntries}
                    showNotDoneEntries={showNotDoneEntries}
                    toogleDoneVisibility={toogleDoneVisibility}
                    toogleNotDoneVisibility={toogleNotDoneVisibility}
                />
                <FlatList
                    data={fakeData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Entry data={item} />}
                    keyExtractor={(item) => item.description}
                    ItemSeparatorComponent={
                        () => (
                        <View style={styles.entrySeparator}></View>
                        )
                    }
                />
            </View>
        </SafeAreaView>
    )
}

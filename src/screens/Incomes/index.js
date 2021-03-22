import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from '@expo/vector-icons';
import FlashMessage from "react-native-flash-message";

import Entry from "../../components/Entry";
import EntriesViewerFilter from "../../components/EntriesViewerFilter";
import AddNewEntryForm from "../../components/AddNewEntryForm";

import styles from "./styles";

import fakeData from "./fakeIncomesData";

export default function IncomeScreen() {

    const [showAddEntryForm, setShowAddEntryForm] = useState(false);

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
                <Text style={styles.screenLabel}>Ganhos de Março, 2021</Text>

                <View style={styles.headerRightActions}>
                    <TouchableOpacity style={styles.headerAction}>
                        <Feather name="search" size={20} color="rgba(0,0,0, .35)" />
                    </TouchableOpacity>
                    <TouchableOpacity  
                        style={[styles.headerAction, { paddingRight: 0 }]}
                        onPress={() => setShowAddEntryForm(true)}    
                    >
                        <Entypo name="add-to-list" size={20} color="rgba(0,0,0, .35)" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.entries}>
                <EntriesViewerFilter
                    isIncome
                    showDoneEntries={showDoneEntries}
                    showNotDoneEntries={showNotDoneEntries}
                    toogleDoneVisibility={toogleDoneVisibility}
                    toogleNotDoneVisibility={toogleNotDoneVisibility}
                />
                <FlatList
                    data={fakeData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Entry isIncome={true} data={item} />}
                    keyExtractor={(item) => item.description}
                    ItemSeparatorComponent={
                        () => (
                        <View style={styles.entrySeparator}></View>
                        )
                    }
                />
            </View>
            <AddNewEntryForm isIncome show={showAddEntryForm} close={() => setShowAddEntryForm(false)} />
            <FlashMessage position="bottom" />
        </SafeAreaView>
    )
}

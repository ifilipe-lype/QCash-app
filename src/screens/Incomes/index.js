import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector } from "react-redux";

import { Entypo, Feather } from '@expo/vector-icons';

import Entry from "../../components/Entry";
import EntriesViewerFilter from "../../components/EntriesViewerFilter";
import AddNewEntryForm from "../../components/AddNewEntryForm";
import EntryDetailsViewer from "../../components/EntryDetailsViewer";

import { Colors } from "../../constants";

import styles from "./styles";

export default function IncomeScreen() {

    const incomes = useSelector(store => store.incomes);

    const [showAddEntryForm, setShowAddEntryForm] = useState(false);
    const [showEntryDetails, setShowEntryDetails] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);

    const [showDoneEntries, setShowDoneEntries] = useState(true);
    const [showNotDoneEntries, setNotShowDoneEntries] = useState(true);

    function toogleDoneVisibility() {
        setShowDoneEntries(!showDoneEntries);
    }

    function toogleNotDoneVisibility() {
        setNotShowDoneEntries(!showNotDoneEntries);
    }

    function showEntryDetailsViewer(entry){
        setShowEntryDetails(true);
        setSelectedEntry(entry);
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
                        <Entypo name="add-to-list" size={24} color={`rgb(${Colors.greenRGB})`} />
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
                    data={incomes}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Entry onPress={showEntryDetailsViewer} isIncome={true} data={item} />}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={
                        () => (
                        <View style={styles.entrySeparator}></View>
                        )
                    }
                />
            </View>
            <AddNewEntryForm isIncome show={showAddEntryForm} close={() => setShowAddEntryForm(false)} />
            {
                selectedEntry && (
                    <EntryDetailsViewer
                        isIncome
                        show={showEntryDetails}
                        close={setShowEntryDetails}
                        entry={selectedEntry}
                    />
                )
            }
        </SafeAreaView>
    )
}

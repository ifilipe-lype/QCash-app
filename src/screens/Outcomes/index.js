import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector, useDispatch } from "react-redux";

import { Entypo, Feather } from '@expo/vector-icons';

import EntriesListing from "../../components/EntriesListing";
import AddNewEntryForm from "../../components/AddNewEntryForm";
import EntryDetailsViewer from "../../components/EntryDetailsViewer";

import { Colors } from "../../constants";
import { addOutcome } from "../../store/reducers/outcomes";


import styles from "./styles";

export default function IncomeScreen() {

    const dispatch = useDispatch();

    const outcomes = useSelector(store => store.outcomes);

    const [showAddEntryForm, setShowAddEntryForm] = useState(false);
    const [showEntryDetails, setShowEntryDetails] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);

    function saveEntry(entry){
        dispatch(addOutcome(entry));
    }

    function selectEntry(entry){
        setShowEntryDetails(true);
        setSelectedEntry(entry);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.screenLabel}>Despesas de Março, 2021</Text>

                <View style={styles.headerRightActions}>
                    <TouchableOpacity style={styles.headerAction}>
                        <Feather name="search" size={20} color="rgba(0,0,0, .35)" />
                    </TouchableOpacity>
                    <TouchableOpacity  
                        style={[styles.headerAction, { paddingRight: 0 }]}
                        onPress={() => setShowAddEntryForm(true)}    
                    >
                        <Entypo name="add-to-list" size={24} color={`rgb(${Colors.redRGB})`} />
                    </TouchableOpacity>
                </View>
            </View>
            
            <EntriesListing
                entries={outcomes}
                selectEntry={selectEntry}
            />

            <AddNewEntryForm saveEntry={saveEntry} show={showAddEntryForm} close={() => setShowAddEntryForm(false)} />
            {
                selectedEntry && (
                    <EntryDetailsViewer
                        show={showEntryDetails}
                        close={setShowEntryDetails}
                        entry={selectedEntry}
                    />
                )
            }
        </SafeAreaView>
    )
}

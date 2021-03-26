import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector, useDispatch } from "react-redux";

import { Entypo, Feather } from '@expo/vector-icons';

import Entry from "../../components/Entry";
import EntriesViewerFilter from "../../components/EntriesViewerFilter";
import AddNewEntryForm from "../../components/AddNewEntryForm";
import EntryDetailsViewer from "../../components/EntryDetailsViewer";

import { Colors } from "../../constants";
import { calcTotalAmount, getSeparatedIncomes } from "../../utils";
import { addIncome } from "../../store/reducers/incomes";


import styles from "./styles";

export default function IncomeScreen() {

    const dispatch = useDispatch();

    const incomes = useSelector(store => store.incomes);
    const [doneIncomes, notDoneIncomes] = getSeparatedIncomes(incomes);

    const [entriesToShow, setEntriesToShow] = useState(incomes)
    
    const doneIncomesTotalAmount = calcTotalAmount(doneIncomes);
    const notDoneIncomesTotalAmount = calcTotalAmount(notDoneIncomes);

    const [showAddEntryForm, setShowAddEntryForm] = useState(false);
    const [showEntryDetails, setShowEntryDetails] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);

    const [showDoneEntries, setShowDoneEntries] = useState(true);
    const [showNotDoneEntries, setNotShowDoneEntries] = useState(true);

    function saveEntry(entry){
        dispatch(addIncome(entry));
    }

    function toogleDoneVisibility() {
        setShowDoneEntries(!showDoneEntries);
        filterEntriesToShow(!showDoneEntries, showNotDoneEntries)
    }

    function toogleNotDoneVisibility() {
        setNotShowDoneEntries(!showNotDoneEntries);
        filterEntriesToShow(showDoneEntries, !showNotDoneEntries);
    }

    function showEntryDetailsViewer(entry){
        setShowEntryDetails(true);
        setSelectedEntry(entry);
    }

    function filterEntriesToShow(showDoneEntries, showNotDoneEntries){
        if(showDoneEntries && showNotDoneEntries){
            setEntriesToShow(incomes);
        } else if(!showDoneEntries && showNotDoneEntries){
            setEntriesToShow(notDoneIncomes);
        } else if(showDoneEntries && !showNotDoneEntries){
            setEntriesToShow(doneIncomes);
        } else {
            setEntriesToShow([])
        }
    }

    useEffect(() => {
        filterEntriesToShow(showDoneEntries, showNotDoneEntries);
    }, [incomes])

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

            <View style={{ paddingHorizontal: 8 }}>
                <EntriesViewerFilter
                    isIncome
                    doneEntriesAmount={doneIncomesTotalAmount}
                    notDoneEntriesAmout={notDoneIncomesTotalAmount}
                    showDoneEntries={showDoneEntries}
                    showNotDoneEntries={showNotDoneEntries}
                    toogleDoneVisibility={toogleDoneVisibility}
                    toogleNotDoneVisibility={toogleNotDoneVisibility}
                />
            </View>
            {
                entriesToShow.length ? (
                    <View style={styles.entries}>
                        <FlatList
                            data={entriesToShow}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <Entry isIncome onPress={showEntryDetailsViewer} data={item} />}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={
                                () => (
                                    <View style={styles.entrySeparator}></View>
                                )
                            }
                            extraData={entriesToShow}
                        />
                    </View>
                ) : (
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center"
                    }}>
                        <Text>Sem ganhos, clique no</Text>
                        <Entypo style={{ marginHorizontal: 8 }} name="add-to-list" size={24} color={`rgb(${Colors.greenRGB})`} />
                        <Text>para adicionar</Text>
                    </View>
                )
            }
            <AddNewEntryForm saveEntry={saveEntry} isIncome show={showAddEntryForm} close={() => setShowAddEntryForm(false)} />
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

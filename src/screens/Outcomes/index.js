import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";

import { Entypo, Feather } from '@expo/vector-icons';

import Entry from "../../components/Entry";
import EntriesViewerFilter from "../../components/EntriesViewerFilter";
import AddNewEntryForm from "../../components/AddNewEntryForm";
import EntryDetailsViewer from "../../components/EntryDetailsViewer";

import styles from "./styles";
import { Colors } from "../../constants";
import { calcTotalAmount, getSeparatedIncomes } from "../../utils";
import { addOutcome } from "../../store/reducers/outcomes";


export default function OutcomeScreen() {

    const dispatch = useDispatch();

    const outcomes = useSelector(store => store.outcomes);
    const [entriesToShow, setEntriesToShow] = useState(outcomes)

    const [doneOutcomes, notDoneOutcomes] = getSeparatedIncomes(outcomes);

    const doneOutcomesTotalAmount = calcTotalAmount(doneOutcomes);
    const notDoneOutcomesTotalAmount = calcTotalAmount(notDoneOutcomes);

    const [showAddEntryForm, setShowAddEntryForm] = useState(false);
    const [showEntryDetails, setShowEntryDetails] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);

    const [showDoneEntries, setShowDoneEntries] = useState(true);
    const [showNotDoneEntries, setNotShowDoneEntries] = useState(true);

    function saveEntry(outcome) {
        dispatch(addOutcome(outcome));
    }

    function toogleDoneVisibility() {
        setShowDoneEntries(!showDoneEntries);
        filterEntriesToShow(!showDoneEntries, showNotDoneEntries)
    }

    function toogleNotDoneVisibility() {
        setNotShowDoneEntries(!showNotDoneEntries);
        filterEntriesToShow(showDoneEntries, !showNotDoneEntries);
    }

    function showEntryDetailsViewer(entry) {
        setShowEntryDetails(true);
        setSelectedEntry(entry);
    }

    function filterEntriesToShow(showDoneEntries, showNotDoneEntries) {
        if (showDoneEntries && showNotDoneEntries) {
            setEntriesToShow(outcomes);
        } else if (!showDoneEntries && showNotDoneEntries) {
            setEntriesToShow(notDoneOutcomes);
        } else if (showDoneEntries && !showNotDoneEntries) {
            setEntriesToShow(doneOutcomes);
        } else {
            setEntriesToShow([])
        }
    }

    useEffect(() => {
        filterEntriesToShow(showDoneEntries, showNotDoneEntries);
    }, [outcomes])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.screenLabel}>Despesas de Março, 2021</Text>

                <View style={styles.headerRightActions}>
                    <TouchableOpacity style={styles.headerAction}>
                        <Feather name="search" size={20} color="rgba(0,0,0, .35)" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setShowAddEntryForm(true)}
                        style={[styles.headerAction, { paddingRight: 0 }]}
                    >
                        <Entypo name="add-to-list" size={24} color={`rgb(${Colors.redRGB})`} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingHorizontal: 8 }}>
                <EntriesViewerFilter
                    doneEntriesAmount={doneOutcomesTotalAmount}
                    notDoneEntriesAmout={notDoneOutcomesTotalAmount}
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
                            renderItem={({ item }) => <Entry onPress={showEntryDetailsViewer} data={item} />}
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
                        <Text>Sem despesas, clique no</Text>
                        <Entypo style={{ marginHorizontal: 8 }} name="add-to-list" size={24} color={`rgb(${Colors.redRGB})`} />
                        <Text>para adicionar</Text>
                    </View>
                )
            }
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

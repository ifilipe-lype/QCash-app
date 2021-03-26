import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector, useDispatch } from "react-redux";

import EntriesScreenHeader from "../../components/EntriesScreenHeader";
import EntriesListing from "../../components/EntriesListing";
import AddNewEntryForm from "../../components/AddNewEntryForm";
import EntryDetailsViewer from "../../components/EntryDetailsViewer";

import { addIncome } from "../../store/reducers/incomes";


import styles from "./styles";

export default function IncomeScreen() {

    const dispatch = useDispatch();

    const incomes = useSelector(store => store.incomes);

    const [showAddEntryForm, setShowAddEntryForm] = useState(false);
    const [showEntryDetails, setShowEntryDetails] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);

    function saveEntry(entry){
        dispatch(addIncome(entry));
    }

    function selectEntry(entry){
        setShowEntryDetails(true);
        setSelectedEntry(entry);
    }

    return (
        <SafeAreaView style={styles.container}>
            <EntriesScreenHeader
                isIncome
                title={"Ganhos de Março, 2021"}
                setShowAddEntryForm={setShowAddEntryForm}
            />
            
            <EntriesListing
                isIncome
                entries={incomes}
                selectEntry={selectEntry}
            />

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

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector, useDispatch } from "react-redux";

import EntriesScreenHeader from "../../components/EntriesScreenHeader";
import EntriesListing from "../../components/EntriesListing";
import AddNewEntryForm from "../../components/AddNewEntryForm";
import EntryDetailsViewer from "../../components/EntryDetailsViewer";

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
            <EntriesScreenHeader
                title={"Despesas de Março, 2021"}
                setShowAddEntryForm={setShowAddEntryForm}
            />
            
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

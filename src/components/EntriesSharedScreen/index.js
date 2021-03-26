import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import EntriesScreenHeader from "../../components/EntriesScreenHeader";
import EntriesListing from "../../components/EntriesListing";
import AddNewEntryForm from "../../components/AddNewEntryForm";
import EntryDetailsViewer from "../../components/EntryDetailsViewer";

export default function EntriesSharedScreen({
    title,
    isIncome,
    entries,
    saveEntry
}) {

    const [showAddEntryForm, setShowAddEntryForm] = useState(false);
    const [showEntryDetails, setShowEntryDetails] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);

    function selectEntry(entry){
        setShowEntryDetails(true);
        setSelectedEntry(entry);
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white"
        }}>
            <EntriesScreenHeader
                isIncome={isIncome}
                title={title}
                setShowAddEntryForm={setShowAddEntryForm}
            />
            
            <EntriesListing
                isIncome={isIncome}
                entries={entries}
                selectEntry={selectEntry}
            />

            <AddNewEntryForm
                isIncome={isIncome}
                show={showAddEntryForm}
                saveEntry={saveEntry}
                close={() => setShowAddEntryForm(false)}
            />

            {
                selectedEntry && (
                    <EntryDetailsViewer
                        isIncome={isIncome}
                        show={showEntryDetails}
                        close={setShowEntryDetails}
                        entry={selectedEntry}
                    />
                )
            }
        </SafeAreaView>
    )
}

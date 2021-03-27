import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import EntriesScreenHeader from "../../components/EntriesScreenHeader";
import EntriesListing from "../../components/EntriesListing";
import AddNewEntryForm from "../../components/AddNewEntryForm";
import EntryEditor from "../../components/EntryEditor";
import EntryDetailsViewer from "../../components/EntryDetailsViewer";

export default function EntriesSharedScreen({
    title,
    isIncome,
    entries,
    saveEntry,
    markEntryAsDone,
    updateEntry
}) {

    const [showAddEntryForm, setShowAddEntryForm] = useState(false);
    const [showEntryEditor, setShowEntryEditor] = useState(false);
    const [showEntryDetails, setShowEntryDetails] = useState(false);

    const [selectedEntry, setSelectedEntry] = useState(null);

    function selectEntry(entry) {
        setShowEntryDetails(true);
        setSelectedEntry(entry);
    }

    function editEntry(){
        setShowEntryEditor(true);
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
                    <>
                        <EntryDetailsViewer
                            isIncome={isIncome}
                            show={showEntryDetails}
                            close={() => setShowEntryDetails(false)}
                            entry={selectedEntry}
                            markEntryAsDone={markEntryAsDone}
                            edit={editEntry}
                        />
                        <EntryEditor
                            isIncome={isIncome}
                            show={showEntryEditor}
                            entry={selectedEntry}
                            updateEntry={updateEntry}
                            close={() => setShowEntryEditor(false)}
                        />
                    </>
                )
            }
        </SafeAreaView>
    )
}

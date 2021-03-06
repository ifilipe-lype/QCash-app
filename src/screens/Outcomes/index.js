import React from "react";

import { useSelector, useDispatch } from "react-redux";

import EntriesSharedScreen from "../../components/EntriesSharedScreen";

import { addEntryToSheet, makeEntryDone, updateEntry, deleteEntry } from "../../store/reducers/sheets";

export default function OutcomeScreen() {

    const dispatch = useDispatch();

    const { active, sheets } = useSelector(store => store.monthlySheets)

    const outcomes = sheets[active] ? sheets[active].outcomes : [];

    function saveEntry(entry){
        dispatch(addEntryToSheet({ entry }));
    }

    function markEntryAsDone(entry){
        dispatch(makeEntryDone({ entry }));
    }

    function updateEntryHelper(entry){
        dispatch(updateEntry({ entry }));
    }

    function deleteEntryHelper(entry){
        dispatch(deleteEntry({ entry }));
    }

    return (
        <EntriesSharedScreen
            entries={outcomes}
            month={active && active.split("-")[0]}
            year={active && active.split("-")[1]}
            saveEntry={saveEntry}
            markEntryAsDone={markEntryAsDone}
            updateEntry={updateEntryHelper}
            deleteEntry={deleteEntryHelper}
        />
    )
}

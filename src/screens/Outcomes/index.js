import React from "react";

import { useSelector, useDispatch } from "react-redux";

import EntriesSharedScreen from "../../components/EntriesSharedScreen";

import { addOutcome, makeOutcomeDone, updateOutcome, deleteOutcome } from "../../store/reducers/outcomes";
import { addEntryToSheet } from "../../store/reducers/sheets";

export default function IncomeScreen() {

    const dispatch = useDispatch();

    const { active, sheets } = useSelector(store => store.monthlySheets)

    const outcomes = sheets[active].outcomes;

    function saveEntry(entry){
        dispatch(addEntryToSheet({ entry }));
    }

    function markEntryAsDone(entry){
        dispatch(makeOutcomeDone(entry));
    }

    function updateEntry(entry){
        dispatch(updateOutcome(entry));
    }

    function deleteEntry(entry){
        dispatch(deleteOutcome(entry))
    }

    return (
        <EntriesSharedScreen
            entries={outcomes}
            title={"Despesas de Março, 2021"}
            saveEntry={saveEntry}
            markEntryAsDone={markEntryAsDone}
            updateEntry={updateEntry}
            deleteEntry={deleteEntry}
        />
    )
}

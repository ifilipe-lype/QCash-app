import React from "react";

import { useSelector, useDispatch } from "react-redux";

import EntriesSharedScreen from "../../components/EntriesSharedScreen";

import { addOutcome, makeOutcomeDone, updateOutcome, deleteOutcome } from "../../store/reducers/outcomes";

export default function IncomeScreen() {

    const dispatch = useDispatch();

    const outcomes = useSelector(store => store.outcomes);

    function saveEntry(entry){
        dispatch(addOutcome(entry));
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

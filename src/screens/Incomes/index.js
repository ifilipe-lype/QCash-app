import React from "react";

import { useSelector, useDispatch } from "react-redux";

import EntriesSharedScreen from "../../components/EntriesSharedScreen";

import { addEntryToSheet, makeEntryDone, updateEntry, deleteEntry } from "../../store/reducers/sheets";

export default function IncomeScreen() {

    const dispatch = useDispatch();

    const { active, sheets } = useSelector(store => store.monthlySheets)

    const incomes = sheets[active] ? sheets[active].incomes : [];

    function saveEntry(entry){
        dispatch(addEntryToSheet({ isIncome: true, entry }));
    }

    function markEntryAsDone(entry){
        dispatch(makeEntryDone({ isIncome: true, entry }));
    }

    function updateEntryHelper(entry){
        dispatch(updateEntry({ isIncome: true, entry }));
    }

    function deleteEntryHelper(entry){
        dispatch(deleteEntry({ isIncome: true, entry }));
    }

    return (
        <EntriesSharedScreen
            isIncome
            entries={incomes}
            month={active && active.split("-")[0]}
            year={active && active.split("-")[1]}
            saveEntry={saveEntry}
            markEntryAsDone={markEntryAsDone}
            updateEntry={updateEntryHelper}
            deleteEntry={deleteEntryHelper}
        />
    )
}

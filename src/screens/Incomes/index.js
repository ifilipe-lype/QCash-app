import React from "react";

import { useSelector, useDispatch } from "react-redux";

import EntriesSharedScreen from "../../components/EntriesSharedScreen";

import { addIncome, makeIncomeDone, updateIncome, deleteIncome } from "../../store/reducers/incomes";
import { addEntryToSheet, makeEntryDone, updateEntry, deleteEntry } from "../../store/reducers/sheets";

export default function IncomeScreen() {

    const dispatch = useDispatch();

    const { active, sheets } = useSelector(store => store.monthlySheets)

    const incomes = sheets[active].incomes;

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
            title={"Ganhos de Março, 2021"}
            saveEntry={saveEntry}
            markEntryAsDone={markEntryAsDone}
            updateEntry={updateEntryHelper}
            deleteEntry={deleteEntryHelper}
        />
    )
}

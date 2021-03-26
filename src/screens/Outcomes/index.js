import React from "react";

import { useSelector, useDispatch } from "react-redux";

import EntriesSharedScreen from "../../components/EntriesSharedScreen";

import { addOutcome } from "../../store/reducers/outcomes";

export default function IncomeScreen() {

    const dispatch = useDispatch();

    const outcomes = useSelector(store => store.outcomes);

    function saveEntry(entry){
        dispatch(addOutcome(entry));
    }

    return (
        <EntriesSharedScreen
            entries={outcomes}
            title={"Despesas de Março, 2021"}
            saveEntry={saveEntry}
        />
    )
}

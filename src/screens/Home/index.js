import React, { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from "react-redux";

import { addActiveSheet, setActiveSheetByDate } from "../../store/reducers/sheets";

import { AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";

import MonthYearPicker from "../../components/MonthYearPicker";

import { Colors, monthsLabel } from "../../constants";
import { calcTotalAmount, getSeparatedIncomes, formatMoney } from "../../utils";
import styles from "./styles";


export default function HomeScreen() {
    const d = new Date();
    const dispatch = useDispatch();

    const { active, sheets } = useSelector(store => store.monthlySheets);

    const [doneIncomes, notDoneIncomes] = getSeparatedIncomes(sheets[active] ? sheets[active].incomes: []);
    const [doneOutcomes, notDoneOutcomes] = getSeparatedIncomes(sheets[active] ? sheets[active].outcomes : []);

    const doneIncomesTotalAmount = calcTotalAmount(doneIncomes);
    const notDoneIncomesTotalAmount = calcTotalAmount(notDoneIncomes);

    const doneOutcomesTotalAmount = calcTotalAmount(doneOutcomes);
    const notDoneOutcomesTotalAmount = calcTotalAmount(notDoneOutcomes);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [activeMonth, setActiveMonth] = useState(d.getMonth());
    const [activeYear, setActiveYear] = useState(d.getFullYear());

    function closePicker() {
        setShowDatePicker(false);
    }

    console.log(active, sheets)

    useEffect(() => {
        if (!sheets[active]) {
            dispatch(setActiveSheetByDate({ month: activeMonth, year: activeYear}));
        }
    }, []);

    useEffect(() => {
        const dateLabel = `${activeMonth}-${activeYear}`
        if(sheets[dateLabel]){
            dispatch(setActiveSheetByDate({ month: activeMonth, year: activeYear}));
        } else {
            dispatch(
                addActiveSheet({
                    month: activeMonth,
                    year: activeYear,
                    incomes: [],
                    outcomes: []
                })
            );
        }
    }, [activeMonth, activeYear])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.statusCard}>
                <View style={styles.statusCardTopShadowHider}></View>

                {/* Date Selector */}
                <TouchableOpacity style={styles.datePickerBtn} onPress={() => setShowDatePicker(!showDatePicker)}>
                    <Text style={styles.datePickerBtnLabel}>{monthsLabel[activeMonth]}, {activeYear}</Text>
                    <AntDesign style={styles.datePickerBtnIcon} name="down" size={16} />
                </TouchableOpacity>

                <View style={{ width: "100%" }}>
                    {/* Total Month Gain */}
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.label}>Rendimento Atual</Text>
                        <Text style={[styles.cashLabel, { color: `rgb(${Colors.blueRGB})`, fontSize: 22 }]}>
                            {formatMoney(doneIncomesTotalAmount - doneOutcomesTotalAmount)} kz
                        </Text>
                    </View>

                    {/* Incomes and Outcomes Totals */}
                    <View style={styles.entriesResults}>
                        {/* Incomes Total */}
                        <TouchableOpacity style={styles.entryCard}>
                            <View style={styles.entryIcon}>
                                <AntDesign name="arrowup" size={20} color="white" />
                            </View>
                            <View>
                                <Text style={styles.label}>ganhos</Text>
                                <Text style={[styles.cashLabel, { color: `rgb(${Colors.greenRGB})` }]}>
                                    {formatMoney(doneIncomesTotalAmount)} kz
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* Outcomes Total */}
                        <TouchableOpacity style={styles.entryCard}>
                            <View style={[styles.entryIcon, { backgroundColor: `rgb(${Colors.redRGB})` }]}>
                                <AntDesign name="arrowdown" size={20} color="white" />
                            </View>
                            <View>
                                <Text style={styles.label}>despesas</Text>
                                <Text style={[styles.cashLabel, { color: `rgb(${Colors.redRGB})` }]}>
                                    {formatMoney(doneOutcomesTotalAmount)} kz
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Por efetuar</Text>
                <View style={styles.sectionBody}>
                    <View style={styles.entriesResults}>
                        {/* Incomes Total */}
                        <TouchableOpacity style={styles.entryCard}>
                            <View style={[styles.entryIcon, { backgroundColor: `rgba(${Colors.greenRGB}, .65)` }]}>
                                <AntDesign name="arrowup" size={20} color="white" />
                            </View>
                            <View>
                                <Text style={styles.label}>ganhos</Text>
                                <Text style={[styles.cashLabel, { color: `rgba(${Colors.greenRGB}, .65)` }]}>
                                    {formatMoney(notDoneIncomesTotalAmount)} kz
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* Outcomes Total */}
                        <TouchableOpacity style={styles.entryCard}>
                            <View style={[styles.entryIcon, { backgroundColor: `rgba(${Colors.redRGB}, .65)` }]}>
                                <AntDesign name="arrowdown" size={20} color="white" />
                            </View>
                            <View>
                                <Text style={styles.label}>despesas</Text>
                                <Text style={[styles.cashLabel, { color: `rgba(${Colors.redRGB}, .65)` }]}>
                                    {formatMoney(notDoneOutcomesTotalAmount)} kz
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {
                showDatePicker && (
                    <MonthYearPicker
                        closePicker={closePicker}
                        showPicker={showDatePicker}
                        activeMonth={activeMonth}
                        setActiveMonth={setActiveMonth}
                        activeYear={activeYear}
                        setActiveYear={setActiveYear}
                    />
                )
            }
        </SafeAreaView>
    )
}

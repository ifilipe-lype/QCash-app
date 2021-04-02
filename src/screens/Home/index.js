import React, { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from "react-redux";

import { AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from "react-native";

import MonthYearPicker from "../../components/MonthYearPicker";

import { Colors, monthsLabel } from "../../constants";
import { calcTotalAmount, getSeparatedIncomes } from "../../utils";
import styles from "./styles";


export default function HomeScreen() {

    const incomes = useSelector(store => store.incomes);
    const outcomes = useSelector(store => store.outcomes);

    const [doneIncomes, notDoneIncomes] = getSeparatedIncomes(incomes);
    const [doneOutcomes, notDoneOutcomes] = getSeparatedIncomes(outcomes);

    const doneIncomesTotalAmount = calcTotalAmount(doneIncomes);
    const doneOutcomesTotalAmount = calcTotalAmount(doneOutcomes);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [activeMonth, setActiveMonth] = useState(2);
    const [activeYear, setActiveYear] = useState(2021);

    function closePicker() {
        setShowDatePicker(false);
    }

    useEffect(() => {
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.statusCard}>
                <View style={styles.statusCardTopShadowHider}></View>

                {/* Date Selector */}
                <TouchableOpacity style={styles.datePickerBtn} onPress={() => setShowDatePicker(!showDatePicker)}>
                    <Text style={styles.datePickerBtnLabel}>{monthsLabel[activeMonth]}, {activeYear}</Text>
                    <AntDesign style={styles.datePickerBtnIcon} name="down" size={16} />
                </TouchableOpacity>

                <View style={{ width: "100%"}}>
                    {/* Total Month Gain */}
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text style={styles.label}>Rendimento Total</Text>
                        <Text style={[styles.cashLabel, { color: `rgb(${Colors.blueRGB})`, fontSize: 22 }]}>
                            {doneIncomesTotalAmount - doneOutcomesTotalAmount}
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
                                    {doneIncomesTotalAmount}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* Outcomes Total */}
                        <TouchableOpacity style={styles.entryCard}>
                            <View style={[styles.entryIcon, { backgroundColor: `rgb(${Colors.redRGB})`}]}>
                                <AntDesign name="arrowdown" size={20} color="white" />
                            </View>
                            <View>
                                <Text style={styles.label}>despesas</Text>
                                <Text style={[styles.cashLabel, { color: `rgb(${Colors.redRGB})` }]}>
                                    {doneOutcomesTotalAmount}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <MonthYearPicker
                closePicker={closePicker}
                showPicker={showDatePicker}
                activeMonth={activeMonth}
                setActiveMonth={setActiveMonth}
                activeYear={activeYear}
                setActiveYear={setActiveYear}
            />
        </SafeAreaView>
    )
}

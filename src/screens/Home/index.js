import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";
import MonthYearPicker from "../../components/MonthYearPicker";

import { monthsLabel } from "../../constants";


export default function HomeScreen() {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [activeMonth, setActiveMonth] = useState(2);
    const [activeYear, setActiveYear] = useState(2021);

    function closePicker(){
        setShowDatePicker(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                alignItems: "center"
            }}>
                <TouchableOpacity style={styles.datePickerBtn} onPress={() => setShowDatePicker(!showDatePicker)}>
                    <Text style={styles.datePickerBtnLabel}>{monthsLabel[activeMonth]}, {activeYear}</Text>
                    <AntDesign style={styles.datePickerBtnIcon} name="down" size={16} />
                </TouchableOpacity>
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

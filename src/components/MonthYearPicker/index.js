import React, { useState } from "react";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";

import { View, Text, TouchableOpacity, Modal } from "react-native";

import styles from "./styles";
import { Colors, monthsLabel } from "../../constants";

export default function MonthYearPicker({ showPicker, closePicker, activeYear, activeMonth, setActiveMonth, setActiveYear }) {

    const [selectedYear, setSelectedYear] = useState(+activeYear);
    const [selectedMonth, setSelectedMonth] = useState(+activeMonth);

    function seleteCurrentDate(){
        const curDate = new Date();

        setActiveYear(curDate.getFullYear());
        setActiveMonth(curDate.getMonth());
        closePicker()
    }

    function selectDate(){
        setActiveYear(selectedYear);
        setActiveMonth(selectedMonth);
        closePicker();
    }

    return (
        <Modal visible={showPicker} transparent onRequestClose={closePicker}>
            <View style={styles.container}>
            {/* Backdrop */}
            <TouchableOpacity onPress={closePicker} style={styles.backdrop}></TouchableOpacity>

                <View style={styles.pickerContainer}>
                    {/* Year selector */}
                    <View style={styles.yearSelector}>
                        <TouchableOpacity style={styles.arrowIcon} onPress={() => setSelectedYear(selectedYear - 1)} >
                            <AntDesign name="left" size={24} color="rgba(0,0,0, .35)" />
                        </TouchableOpacity>
                        <Text style={[styles.yearLabel, { color: activeYear === selectedYear ? Colors.blue : "rgba(0,0,0, .65)"}]}>{selectedYear}</Text>
                        <TouchableOpacity style={styles.arrowIcon} onPress={() => setSelectedYear(selectedYear + 1)} >
                            <AntDesign name="right" size={24} color="rgba(0,0,0, .35)" />
                        </TouchableOpacity>
                    </View>

                    {/* Month selector */}
                    <View style={styles.monthSelector}>
                        {
                            monthsLabel.map((month, index) => (
                                <TouchableOpacity
                                    onPress={() => setSelectedMonth(index)}
                                    style={styles.monthCard}
                                    key={index}
                                >
                                    <Text style={{
                                        fontSize: 15,
                                        color: index === selectedMonth ? Colors.blue : "rgba(0,0,0, .65)"
                                    }}>{month.slice(0, 3)}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    
                    {/* Footer buttons options */}
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.footerActionBtn}
                            onPress={closePicker}
                        >
                            <Text style={{
                                fontSize: 14,
                                color: `rgba(0,0,0, .5)`,
                            }}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerActionBtn}
                            onPress={seleteCurrentDate}
                        >
                            <Text style={styles.actionLabelBlue}>Data Atual</Text>
                            <FontAwesome name="calendar-check-o" size={16} color={`rgb(${Colors.blueRGB})`} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerActionBtn}
                            onPress={selectDate}
                        >
                            <Text style={styles.actionLabelBlue}>Ok</Text>
                            <AntDesign name="checkcircleo" size={16} color={`rgb(${Colors.blueRGB})`} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

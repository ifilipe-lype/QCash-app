import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import { AntDesign, Entypo } from '@expo/vector-icons';

import { getWeekDayHourFormat, maxLengthOrDots, formatMoney } from "../../utils";

export default function Entry({ data, isIncome, onPress }) {
    const {
        description,
        created_at,
        done,
        amount
    } = data;

    let formatedDateStr = getWeekDayHourFormat(created_at);
    let descriptionFormated = maxLengthOrDots(description, 63);

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(data)}>
            <View style={styles.body}>
                <Text style={styles.creationDate}>{formatedDateStr}</Text>
                <Text style={styles.description}>{descriptionFormated}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.amount(isIncome)}>{formatMoney(amount)} kz</Text>
                {
                    done ? (
                        <AntDesign name="checkcircle" size={14} style={styles.doneIcon} />
                    ) : (
                        <Entypo name="pin" size={14} style={styles.pinnedIcon} />
                    )
                }
            </View>
        </TouchableOpacity>
    );
}

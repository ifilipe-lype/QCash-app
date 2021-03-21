import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

import { AntDesign, Entypo } from '@expo/vector-icons';

import { daysOfWeek } from "../../constants";

export default function Income({ data }) {
    const {
        description,
        created_at,
        done,
        amount
    } = data;

    const date = new Date(created_at);

    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes()

    let dayOfWeek = daysOfWeek[date.getDay()];

    let formatedDateStr = `${dayOfWeek} ${day}, as ${hour}:${min}`;

    let descriptionFormated = description.length > 65 ? `${description.slice(0, 65)}...` : description;

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.creationDate}>{formatedDateStr}</Text>
                <Text style={styles.description}>{descriptionFormated}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.amount}>{amount}</Text>
                {
                    done ? (
                        <AntDesign name="checkcircle" size={14} style={styles.doneIcon} />
                    ) : (
                        <Entypo name="pin" size={14} color="rgba(0,0,0, .35)" />
                    )
                }
            </View>
        </TouchableOpacity>
    );
}

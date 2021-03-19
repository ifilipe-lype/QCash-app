import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Income({ data }) {
    const {
        description,
        amount
    } = data;

    return (
        <TouchableOpacity style={styles.container}>
            <View >
                <Text>{description}</Text>
            </View>
            <View style={{
                flexDirection: "row"
            }}>
                <Text>
                    {amount}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

import React from "react";

import { View, Text } from "react-native";

import styles from "./styles";

import FloatModal from "../FloatModal";

export default function MonthYearPicker({ show, close }) {

    return (
        <FloatModal show={show} close={close}>
            <View style={styles.container}>
                <Text>Hello, World!</Text>
            </View>
        </FloatModal>
    )
}

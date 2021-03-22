import React from "react";
import { View, Text} from "react-native";

import styles from "./styles";

import FloatModal from "../FloatModal";

export default function AddNewEntry({ show, close, isIncome }) {

    return (
        <FloatModal show={show} close={close}>
            <View style={styles.container}>
                <View style={styles.heade}>
                    <Text>Header</Text>
                </View>
                
                <View style={styles.main}>
                    <Text>Body</Text>
                </View>

                <View style={styles.footer}>
                    <Text>Footer</Text>
                </View>
            </View>
        </FloatModal>
    )
}

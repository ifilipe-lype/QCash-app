import React from "react";

import { View, TouchableOpacity, Modal } from "react-native";

import styles from "./styles";

export default function FloatModal({ show, close, children }) {

    return (
        <Modal visible={show} transparent >
            <View style={styles.container}>
            {/* Backdrop */}
            <TouchableOpacity onPress={close} style={styles.backdrop}></TouchableOpacity>

                <View style={styles.modalBody}>
                   { children }
                </View>
            </View>
        </Modal>
    )
}

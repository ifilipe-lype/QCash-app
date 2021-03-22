import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { showMessage } from "react-native-flash-message";

import styles from "./styles";
import { Colors } from "../../constants";

import FloatModal from "../FloatModal";
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function MonthYearPicker({ show, close }) {

    const [done, setDone] = useState(true);
    const { control, handleSubmit, errors } = useForm();

    function submitForm(data) {
        console.log({ ...data, done });
        close()
        showMessage({
            message: "novo ganho adicionado com sucesso",
            type: "success",
            duration: 2500
        });
    }

    return (
        <FloatModal show={show} close={close}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Adicionar Ganho</Text>
                </View>
                <View style={styles.formBody}>
                    <View style={styles.inputGroup}>
                        {errors.description && <Text style={styles.errorMsg}>Descrição é obrigatoria!</Text>}
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    placeholder="Descrição do ganho"
                                />
                            )}
                            name="description"
                            rules={{ required: true, minLength: 3 }}
                            defaultValue=""
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        {errors.amount && <Text style={styles.errorMsg}>Montante deve ser maior que zero</Text>}
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    placeholder="Montante"
                                    keyboardType="decimal-pad"
                                />
                            )}
                            name="amount"
                            rules={{ required: true, min: 0 }}
                            defaultValue=""
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <View style={styles.choices}>
                            <TouchableOpacity
                                onPress={() => setDone(true)}
                                style={[styles.choice, { borderRightWidth: 1, borderColor: "rgba(0,0,0, .35)" }]}
                            >
                                <Text>Recebido</Text>
                                <AntDesign name="checkcircle" color={done ? `rgb(${Colors.greenRGB})` : "rgba(0,0,0, .15)"} size={16} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setDone(false)}
                                style={styles.choice}
                            >
                                <Text>Por Receber</Text>
                                <Entypo name="pin" size={16} color={!done ? `rgb(${Colors.redRGB})` : "rgba(0,0,0, .15)"} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={handleSubmit(submitForm)} style={styles.submitBtn}>
                        <AntDesign name="checkcircle" size={48} color={`rgb(${Colors.greenRGB})`} />
                    </TouchableOpacity>
                </View>
            </View>
        </FloatModal>
    )
}

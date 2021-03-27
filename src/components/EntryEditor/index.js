import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { showMessage } from "react-native-flash-message";
import Dialog from "react-native-dialog";

import styles from "./styles";
import { Colors } from "../../constants";

import FloatModal from "../FloatModal";
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

export default function EntryEditor({
    show,
    close,
    isIncome,
    entry,
    updateEntry,
    deleteEntry
}) {

    const [showConfirmDeleteDialog, setShowConfirmDeleteDialog] = useState(false)
    const [done, setDone] = useState(entry.done);
    const { control, handleSubmit, errors } = useForm();

    const mainColor = isIncome ? Colors.greenRGB : Colors.redRGB;

    function submitForm(entryFormValues) {
        const newIncome = {
            id: entry.id,
            ...entryFormValues,
            done_at: done ? Date.now() : null,
            done,
        };

        updateEntry(newIncome);
        close();
        showMessage({
            message: `Alteração de ${isIncome ? "Ganho" : "Despesa"}`,
            description: `${isIncome ? "ganho" : "despesa"} alterad${isIncome ? "o" : "a"} com sucesso`,
            type: "info",
            icon: "auto",
            duration: 3000
        });
    }

    function deleteEntryHelper(){
        deleteEntry(entry);
        setShowConfirmDeleteDialog(false)
        close();
        showMessage({
            message: `Remoção de ${isIncome ? "Ganho" : "Despesa"}`,
            description: `${isIncome ? "ganho" : "despesa"} removid${isIncome ? "o" : "a"} com sucesso`,
            type: "success",
            icon: "auto",
            duration: 3000
        });
    }

    return (
        <FloatModal show={show} close={close}>
            <View style={styles.container}>
                <View style={styles.header(isIncome)}>
                    <Text style={[styles.title, { color: `rgb(${mainColor})` }]}>Alterar {isIncome ? "Ganho" : "Despesa"}</Text>
                    <TouchableOpacity onPress={() => setShowConfirmDeleteDialog(true)}>
                        <Ionicons name="md-trash-outline" size={24} color={`rgb(${Colors.redRGB})`} />
                    </TouchableOpacity>
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
                            defaultValue={entry.description}
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
                            defaultValue={entry.amount}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <View style={styles.choices}>
                            <TouchableOpacity
                                onPress={() => setDone(true)}
                                style={[styles.choice, { borderRightWidth: 1, borderColor: "rgba(0,0,0, .08)" }]}
                            >
                                <Text>Efetuado</Text>
                                <AntDesign name="checkcircle" color={done ? `rgb(${Colors.greenRGB})` : "rgba(0,0,0, .15)"} size={16} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setDone(false)}
                                style={styles.choice}
                            >
                                <Text>Por efetuar</Text>
                                <Entypo name="pin" size={16} color={!done ? `rgb(${Colors.redRGB})` : "rgba(0,0,0, .15)"} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={handleSubmit(submitForm)} style={styles.submitBtn}>
                        <AntDesign name="checkcircle" size={48} color={`rgb(${mainColor})`} />
                    </TouchableOpacity>
                </View>
                <ConfirmDeleteDialog
                    show={showConfirmDeleteDialog}
                    title={`Remover ${isIncome ? "Ganho" : "Despesa"}`}
                    description={`Deseja remover ${isIncome ? "ganho" : "despesa"} ? essa ação não poder ser disfeita.`}
                    mainColor={`rgb(${mainColor})`}
                    cancel={() => setShowConfirmDeleteDialog(false)}
                    confirm={deleteEntryHelper}
                />
            </View>
        </FloatModal>
    )
}

function ConfirmDeleteDialog({ mainColor, show, description, title, cancel, confirm}) {
    return (
        <Dialog.Container visible={show}>
            <Dialog.Title style={{color: mainColor}}>{title}</Dialog.Title>
            <Dialog.Description>
                {description}
            </Dialog.Description>
            <Dialog.Button onPress={cancel} style={{color: "rgba(0,0,0, .45)"}} label="Cancelar" />
            <Dialog.Button style={{color: mainColor}} onPress={confirm} label="Apagar" />
        </Dialog.Container>
    )
}

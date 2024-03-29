import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { showMessage } from "react-native-flash-message";

import styles from "./styles";

import FloatModal from "../FloatModal";

import {
    Entypo,
    Feather,
    AntDesign,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons
} from '@expo/vector-icons';

import { Colors } from "../../constants";
import { getDayMonthYearFormat, formatMoney } from "../../utils";

export default function AddNewEntry({ show, close, isIncome, entry, markEntryAsDone, edit }) {

    const {
        done,
        description,
        amount,
        created_at
    } = entry;

    const mainColor = isIncome ? Colors.greenRGB : Colors.redRGB;

    function makeEntryDone(entry){
        markEntryAsDone(entry);
        close();
        showMessage({
            message: `Efetuamento de ${isIncome ? "Ganho" : "Despesa"}`,
            description: `${isIncome ? "Ganho" : "Despesa"} efetuad${isIncome ? "o" : "a"} com sucesso`,
            type: "info",
            icon: "auto",
            duration: 3000
        });
    }

    function editEntry(){
        close();
        setTimeout(edit, 50);
    }

    return (
        <FloatModal show={show} close={close}>
            <View style={styles.container}>
                <View style={[styles.header, { borderColor: `rgb(${mainColor})`}]}>
                    <View style={styles.infoBox}>
                        {
                            isIncome ? (
                                <Feather name="corner-left-up" size={20} color={`rgb(${mainColor})`} />
                            ) : (
                                <Feather name="corner-left-down" size={20} color={`rgb(${mainColor})`} />
                            )
                        }
                        <Text style={styles.infoLabel}>{isIncome ? "Ganho" : "Despesa"}</Text>
                    </View>

                    <View style={styles.infoBox}>
                        {
                            done ? (
                                <AntDesign name="checkcircle" color={`rgb(${Colors.greenRGB})`} size={20} />
                            ) : (
                                <Entypo name="pin" size={20} color={`rgb(${Colors.redRGB})`} />
                            )
                        }
                        <Text style={styles.infoLabel}>{done ? "Efetuado" : "Por efetuar"}</Text>
                    </View>
                </View>

                <View style={styles.main}>
                    <View style={styles.detail}>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Ionicons style={styles.detailIcon} name="md-document-text-outline" size={20} />
                            <Text style={styles.detailLabel}>Descrição</Text>
                        </View>
                        <Text style={styles.detailValue}>{description}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <View style={styles.detail}>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <MaterialIcons style={[styles.detailIcon, { color: `rgb(${mainColor})`}]} name="attach-money" size={20} />
                                <Text style={styles.detailLabel}>Montante</Text>
                            </View>
                            <Text style={[styles.detailValue, { color: `rgb(${mainColor})`, fontSize: 18 }]}>{formatMoney(amount)} kz</Text>
                        </View>

                        <View style={styles.detail}>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <MaterialCommunityIcons style={styles.detailIcon} name="calendar-blank-outline" size={20} />
                                <Text style={styles.detailLabel}>Criado em</Text>
                            </View>
                            <Text style={styles.detailValue}>{getDayMonthYearFormat(created_at)}</Text>
                        </View>
                    </View>

                    {
                        done && (
                            <View style={styles.detail}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <MaterialCommunityIcons style={styles.detailIcon} name="calendar-check-outline" size={20} />
                                    <Text style={styles.detailLabel}>Efetuado em</Text>
                                </View>
                                <Text style={styles.detailValue}>{getDayMonthYearFormat(created_at)}</Text>
                            </View>
                        )
                    }
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.editBtn(mainColor)}
                        onPress={() => editEntry(entry)}
                    >
                        <Text style={{
                            fontSize: 18,
                            color: "white"
                        }}>Editar</Text>
                    </TouchableOpacity>
                    {
                        !done && (
                            <TouchableOpacity
                                style={styles.makeDoneBtn(mainColor)}
                                onPress={() => makeEntryDone(entry)}
                            >
                                <Text style={{
                                    fontSize: 18,
                                    color: `rgb(${mainColor})`
                                }}>Efetuar</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        </FloatModal>
    )
}

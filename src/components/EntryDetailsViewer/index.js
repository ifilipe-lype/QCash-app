import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
import { getDayMonthYearFormat } from "../../utils";

export default function AddNewEntry({ show, close, isIncome, entry }) {

    const {
        done,
        description,
        amount,
        created_at
    } = entry;

    const mainColor = isIncome ? Colors.greenRGB : Colors.redRGB;

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
                            <Text style={[styles.detailValue, { color: `rgb(${mainColor})`, fontSize: 18 }]}>{amount}</Text>
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
                    <TouchableOpacity style={styles.editBtn(mainColor)}>
                        <Text style={{
                            fontSize: 18,
                            color: "white"
                        }}>Editar</Text>
                    </TouchableOpacity>
                    {
                        !done && (
                            <TouchableOpacity style={styles.makeDoneBtn(mainColor)}>
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

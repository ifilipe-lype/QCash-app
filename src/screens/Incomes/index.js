import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Entry from "../../components/Entry";


import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from "./styles";

const fakeData = [
    {
        description: "ganho #1 lorem sf lidf slidf sidfsfe sfsdf lifsdf fsfi dfsfi sfie dsfsd",
        amount: "1,250,000,000",
        done: true,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #2",
        amount: "3000",
        done: true,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #3",
        amount: "4000",
        done: false,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #4",
        amount: "1000",
        done: true,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #5",
        amount: "1000",
        done: false,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #6",
        amount: "1000",
        done: false,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #7",
        amount: "1000",
        done: false,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #8",
        amount: "1000",
        done: false,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #10",
        amount: "1000",
        done: false,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #11",
        amount: "1000",
        done: false,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #12",
        amount: "1000",
        done: false,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
    {
        description: "ganho #13",
        amount: "1000",
        done: false,
        done_at: "01/12/2021",
        created_at: Date.now()
    },
]

export default function IncomeScreen() {

    const [showDoneEntries, setShowDoneEntries] = useState(true);
    const [showNotDoneEntries, setNotShowDoneEntries] = useState(true);

    function toogleVisibility(doneEntries) {
        if (doneEntries) {
            setShowDoneEntries(!showDoneEntries);
        } else {
            setNotShowDoneEntries(!showNotDoneEntries);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.screenLabel}>Ganhos de Março, 2021</Text>

                <View style={styles.headerRightActions}>
                    <TouchableOpacity style={styles.headerAction}>
                        <Feather name="search" size={20} color="rgba(0,0,0, .35)" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.headerAction, { paddingRight: 0 }]}>
                        <Entypo name="add-to-list" size={20} color="rgba(0,0,0, .35)" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.incomes}>
                {/* Header */}
                <View style={styles.incomeResultHeader}>
                    <TouchableOpacity onPress={() => toogleVisibility(true)} style={styles.incomeResult}>
                        {
                            showDoneEntries ? (
                                <MaterialCommunityIcons name="calendar-check-outline" size={28} color="white" />
                            ) : (
                                <MaterialCommunityIcons name="eye-off-outline" size={28} color="rgba(0,0,0, .35)" />
                            )
                        }
                        <View style={{
                            marginLeft: 6
                        }}>
                            <Text style={styles.resultLabel}>Efetuados</Text>
                            <Text style={styles.resultAmount}>645,000 kz</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toogleVisibility(false)} style={styles.incomeResult}>
                        {
                            showNotDoneEntries ? (
                                <MaterialCommunityIcons name="calendar-blank-outline" size={28} color="white" />
                            ) : (
                                <MaterialCommunityIcons name="eye-off-outline" size={28} color="rgba(0,0,0, .35)" />
                            )
                        }
                        <View style={{
                            marginLeft: 6
                        }}>
                            <Text style={styles.resultLabel}>Por efetuar</Text>
                            <Text style={styles.resultAmount}>145,000 kz</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={fakeData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Entry isIncome={true} data={item} />}
                    keyExtractor={(item) => item.description}
                    ItemSeparatorComponent={
                        () => <View style={{
                            height: 1,
                            backgroundColor: "rgba(0,0,0, .05)"
                        }}></View>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Entypo } from '@expo/vector-icons';

import Entry from "../Entry";
import EntriesViewerFilter from "../EntriesViewerFilter";
import { Colors } from "../../constants";

import styles from "./styles";

export default function EntriesListing({ isIncome, entries, selectEntry }) {

    const [entriesToShow, setEntriesToShow] = useState(entries);

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 8 }}>
                <EntriesViewerFilter
                    isIncome={isIncome}
                    entries={entries}
                    setEntriesToShow={setEntriesToShow}
                />
            </View>
            {
                entriesToShow.length ? (
                    <View style={styles.entries}>
                        <FlatList
                            data={entriesToShow}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <Entry isIncome onPress={selectEntry} data={item} />}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={
                                () => (
                                    <View style={styles.entrySeparator}></View>
                                )
                            }
                            extraData={entriesToShow}
                        />
                    </View>
                ) : (
                    <View style={styles.emptyList}>
                        <Text>Sem {isIncome ? "ganhos" : "despesas"}, clique no</Text>
                        <Entypo
                            style={{ marginHorizontal: 8 }}
                            name="add-to-list" size={24}
                            color={`rgb(${isIncome ? Colors.greenRGB : Colors.redRGB})`}
                        />
                        <Text>para adicionar</Text>
                    </View>
                )
            }
        </View>
    )
}

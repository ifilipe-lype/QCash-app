import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    entries: {
        backgroundColor: "white",
        paddingHorizontal: 8,
        paddingBottom: 100,
    },
    entrySeparator: {
        height: 1,
        backgroundColor: "rgba(0,0,0, .05)"
    },
    emptyList: {
        flex: 1,
        flexDirection: "row",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    }
});

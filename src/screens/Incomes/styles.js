import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingHorizontal: 12,
        height: 48,
        paddingVertical: 8
    },
    screenLabel: {
        fontSize: 14,
        color: `rgb(${Colors.purpleDarkRGB})`
    },
    headerRightActions: {
        flexDirection: "row",
    },
    headerAction: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    entries: {
        backgroundColor: "white",
        paddingHorizontal: 8,
        paddingBottom: 100,
    },
    entrySeparator: {
        height: 1,
        backgroundColor: "rgba(0,0,0, .05)"
    }
});

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
    resultLabel: {
        color: `rgba(0,0,0, .65)`,
        fontSize: 12,
    },
    resultAmount: {
        color: `rgba(0,0,0, .65)`,
        fontWeight: "bold"
    },
    incomes: {
        backgroundColor: "#fafafa",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 15,
        height: "100%"
    },
    incomeResults: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderColor: `rgba(${Colors.purpleDarkRGB}, .12)`
    },
    incomeResult: {
        flexDirection: "row",
        alignItems: "center"
    }
});

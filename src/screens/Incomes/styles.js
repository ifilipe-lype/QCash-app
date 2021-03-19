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
        color: `rgb(${Colors.purpleDarkRGB})`,
        fontSize: 12,
    },
    incomes: {
        backgroundColor: "#fafafa",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 15,
        height: "100%"
    },
    incomeResult: {
        flexDirection: "row",
        alignItems: "center"
    }
});

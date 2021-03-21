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
    resultLabel: {
        color: `white`,
        fontWeight: "bold",
        fontSize: 12,
    },
    resultAmount: {
        color: `white`,
        fontWeight: "bold"
    },
    incomes: {
        backgroundColor: "white",
        paddingHorizontal: 8,
        paddingBottom: 100,
    },
    incomeResultHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 30,
        backgroundColor: `rgba(${Colors.greenRGB}, 1)`,
        borderColor: `rgba(${Colors.purpleDarkRGB}, .12)`,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    incomeResult: {
        flexDirection: "row",
        alignItems: "center"
    }
});

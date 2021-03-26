import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default StyleSheet.create({
    label: {
        color: `white`,
        fontWeight: "bold",
        fontSize: 12,
    },
    amount: {
        color: `white`,
        fontWeight: "bold"
    },
    container:(isIncome) => ({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 30,
        backgroundColor: `rgb(${isIncome ? Colors.greenRGB : Colors.redRGB})`,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }),
    entryResult: {
        flexDirection: "row",
        alignItems: "center"
    }
});

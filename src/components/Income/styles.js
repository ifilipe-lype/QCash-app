import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default StyleSheet.create({
    container: {
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 8
    },
    body: {
        paddingRight: 4,
        marginBottom: 6,
    },
    description: {
        fontSize: 16,
        color: `rgb(${Colors.purpleDarkRGB})`,
    },
    creationDate: {
        fontSize: 11,
        color: "rgba(0,0,0, .45)",
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
    },
    amount: {
        fontWeight: "500",
        fontSize: 18,
        color: `rgb(${Colors.greenRGB})`,
        marginRight: 12
    },
    doneIcon: {
        color: `rgb(${Colors.greenRGB})`
    }
});

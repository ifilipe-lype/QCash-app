import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    datePickerContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    datePickerBtn: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 10
    },
    datePickerBtnLabel: {
        fontSize: 18,
        color: "rgba(0,0,0, .7)"
    },
    datePickerBtnIcon: {
        marginLeft: 6,
        color: "rgba(0,0,0, .7)"
    }
});
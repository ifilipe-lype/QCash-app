import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    pickerContainer: {
        alignItems: "center",
        width: "90%",
        paddingHorizontal: 6,
        paddingVertical: 12,
        borderRadius: 6,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    backdrop: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0, .35)",
        width: "100%",
        height: "100%",
    },
    arrowIcon: {
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: "rgba(0,0,0, .35)",
    },
    yearLabel: {
        fontSize: 24,
    },
    monthCard: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
        padding: 8,
        marginVertical: 6,
        borderRadius: 5,
        backgroundColor: "rgba(0,0,0, .025)"
    }
});
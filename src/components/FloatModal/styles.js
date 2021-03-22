import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    formBody: {
        padding: 12,
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
});
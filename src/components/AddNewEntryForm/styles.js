import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 6,
        overflow: "hidden"
    },
    header:(isIncome) => ({
        borderBottomWidth: 2,
        borderColor: isIncome ? `rgb(${Colors.greenRGB})` : `rgb(${Colors.redRGB})`,
        paddingVertical: 24,
        paddingHorizontal: 12
    }),
    title: {
        fontSize: 20,
        color: `rgb(${Colors.greenRGB})`,
        textAlign: "center",
        fontWeight: "700"
    },
    formBody: {
        paddingVertical: 24,
        paddingHorizontal: 12
    },
    inputGroup: {
        marginVertical: 8,
    },
    label: {
        fontSize: 14,
        color: "gray"
    },
    input: {
        borderWidth: 1,
        padding: 8,
        borderColor: "rgba(0,0,0, .35)",
        borderRadius: 6
    },
    errorMsg: {
        color: `rgb(${Colors.redRGB})`,
        marginBottom: 2,
        textTransform: "lowercase"
    },
    choices:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "rgba(0,0,0, .35)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    choice:{
        flexDirection: "row",
        padding: 12,
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    label: {

    },
    icon: {
        marginLeft: 4,
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 24,
        
    },
    submitBtn: {
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

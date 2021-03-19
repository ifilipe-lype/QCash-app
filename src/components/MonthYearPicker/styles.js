import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

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
    yearSelector: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: "auto",
        width: "70%"
    },
    yearLabel: {
        fontSize: 24,
    },
    monthSelector: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingVertical: 24,
        paddingHorizontal: 5,
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
    },
    footer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around"
    },
    footerActionBtn: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 2
    },
    actionLabelBlue: {
        fontSize: 14,
        color: `rgb(${Colors.blueRGB})`,
        marginRight: 6,
    }
});
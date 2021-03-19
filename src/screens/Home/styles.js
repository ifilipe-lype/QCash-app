import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 2,
        backgroundColor: `#f7f7f7`,
    },
    statusCardTopShadowHider: {
        backgroundColor: "white",
        width: "100%",
        height: 2,
        position: "absolute",
        top: -2
    },
    statusCard: {
        position: "relative",
        alignItems: "center",
        backgroundColor: "white",
        padding: 12,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    entriesResults: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingVertical: 12
    },
    entryIcon: {
        padding: 6,
        marginRight: 6,
        borderRadius: 100,
        backgroundColor: `rgb(${Colors.greenRgbValue})`
    },
    label: {
        fontSize: 14,
        color: "rgba(0,0,0, .7)"
    },
    cashLabel: {
        fontSize: 18,
        fontWeight: "600"
    },
    entryCard: {
        flexDirection: "row",
        alignItems: "center"
    },
    datePickerBtn: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 10
    },
    datePickerBtnLabel: {
        fontSize: 18,
        color: `rgb(${Colors.grayDarkRgbValue})`
    },
    datePickerBtnIcon: {
        marginLeft: 6,
        color: `rgb(${Colors.grayDarkRgbValue})`
    }
});
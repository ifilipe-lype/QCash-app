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
        color: `rgba(${Colors.purpleDarkRGB}, .5)`
    },
    headerRightActions: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerAction: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    }
});

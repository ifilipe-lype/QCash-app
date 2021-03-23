import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 6,
        overflow: "hidden"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 24,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0, .08)"
    },
    infoBox: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 16
    },
    infoLabel: {
        fontWeight: "700",
        fontSize: 14,
        color: `rgba(0,0,0, .55)`,
        marginLeft: 6
    },
    detail: {
        marginVertical: 6,
    },
    detailIcon: {
        marginRight: 6,
        color: `rgba(0,0,0, .45)`
    },
    detailLabel:{
        fontSize: 14,
        color: `rgba(0,0,0, .45)`,
    },
    detailValue:{
        marginLeft: 26,
        fontSize: 14,
        color: `rgba(0,0,0, .85)`,
    },
    main: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        overflow: "hidden"
    },
    footer: {
        paddingVertical: 24,
        paddingHorizontal: 24

    },
    editBtn: (bgColor) => ({
        alignItems: "center",
        backgroundColor: `rgb(${bgColor})`,
        padding: 8,
        marginBottom: 12,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,

        elevation: 2,
    }),
    makeDoneBtn: (bgColor) => ({
        alignItems: "center",
        borderWidth: 1,
        borderColor: `rgb(${bgColor})`,
        padding: 8,
        marginBottom: 12,
        borderRadius: 12,
    })
});

import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    auth: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#27569C',
        borderStyle: "solid",
        borderWidth: 5,
    },
    title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
        text: '#27569C'
    },
    input: {
        paddingHorizontal: 10,
        backgroundColor: '#D9D9D9',
        width: 210,
        height: 40,
        marginLeft: 35,
        marginRight: 40,
        marginBottom: 25,
        borderColor: '#27569C',
        borderStyle: "solid",
        borderWidth: 4,
        borderRadius: 10
    },
    text: {
        fontSize: 24,
        fontWeight: '800',
        marginLeft: 35,
        marginBottom: 15,
    }
})

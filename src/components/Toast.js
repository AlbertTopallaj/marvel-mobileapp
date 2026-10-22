import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";


export function Toast({ message, type, visible }){
    if(!visible){
        return null;
    }

    let iconName;
    let iconColor;

    if(type === "success"){
        iconName = "checkmark-circle";
        iconColor = "#4CAF50";
    } else if (type === "error"){
        iconName = "close-circle";
        iconColor = "#E53935";
    } else {
        iconName = "information-circle";
        iconColor = "#2196F3";
    }
    return <>
    <View style={styles.container}>
        <View style={styles.toast}>
            <Ionicons
            name={iconName}
            size={24}
            color={iconColor}
            accessible={false}>

            </Ionicons>

            <Text style={styles.message}>{message}</Text>
        </View>
    </View>
    </>
}

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 40,
        left: 20,
        right: 20,
        alignItems: "center",
    },

    toast: {
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#FFFFFF",
        paddingVertical: 14,
        paddingHorizontal: 20,

        borderRadius: 30,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },

    message: {
        color: "#333333",
        fontSize: 15,
        fontWeight: "500",
        marginLeft: 10,
    }
});
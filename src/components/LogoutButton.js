import { Pressable, View, Text, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function LogoutButton() {
    const { logout } = useAuth();
    const [visible, setVisible] = useState(false);

    return <>
    <View style={styles.card}>
        <Pressable style={styles.button} onPress={logout}>
            <Text style={styles.text}>Logga ut</Text>
        </Pressable>
    </View>
    </>
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: "flex-end",
        bottom: 20,
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    button: {
        backgroundColor: "red",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
})
import { Pressable, View, Text, StyleSheet, Modal } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function LogoutButton() {
    const { logout } = useAuth();
    const [visible, setVisible] = useState(false);

    return <>
    <View style={styles.card}>
        <Pressable style={styles.button} onPress={() => setVisible(true)}>
            <Text style={styles.text}>Logga ut</Text>
        </Pressable>
    </View>

    <Modal
    visible={visible}
    transparent={true}
    animationType="fade">
        <View style={styles.overlay}>
            <View style={styles.modal}>
                <Text style={styles.modalText}>Vill du verkligen logga ut?</Text>
                <Pressable onPress={logout} style={styles.confirmButton}>
                    <Text style={styles.text}>Ja, logga ut</Text>
                </Pressable>
                <Pressable onPress={() => setVisible(false)} style={styles.cancelButton}>
                    <Text style={styles.cancelText}>Avbryt</Text>
                </Pressable>
            </View>
        </View>
    </Modal>

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
    overlay: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 24,
        width: "80%",
        gap: 12,
    },
    modalText: {
        fontSize: 16,
        textAlign: "center",
    },
    confirmButton: {
        backgroundColor: "red",
        padding: 12,
        borderRadius: 0,
        alignItems: "center",
    },
    cancelButton: {
        padding: 12,
        alignItems: "center", 
    },
    cancelText: {
        color: "gray",
        fontSize: 16,
    }
})
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";


export default function DeleteAccountButton(){
    const [visible, setVisible] = useState(false);
    const { user, deleteAccount } = useAuth();

    const handleDelete = async () => {
        try {
            await deleteAccount(user.id);
            setVisible(false);
            Alert.alert("Klart", "Ditt konto har blivit raderat");
        } catch (error) {
            Alert.alert("Fel",  error.message);
        }
    }

    return <>
    <View style={styles.card}>
            <Pressable style={styles.button} onPress={() => setVisible(true)}>
                <Text style={styles.text}>Radera konto</Text>
            </Pressable>
        </View>
    
        <Modal
        visible={visible}
        transparent={true}
        animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.modalText}>Vill du verkligen radera ditt konto?</Text>
                    <Pressable onPress={handleDelete} style={styles.confirmButton}>
                        <Text style={styles.text}>Ja, radera mitt konto</Text>
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
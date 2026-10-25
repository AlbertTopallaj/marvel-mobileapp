import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

export default function CreateReviewButton({ movieId, onReviewCreated }){
    const { user } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { showToast } = useToast();

    const handleSubmit = () => {
        if(!title){
            setModalVisible(false);
            setTimeout(() =>  showToast("Titel saknas", "error"), 500);
            return;
        }
        if(!description){
            setModalVisible(false);
            setTimeout(() => showToast("Beskrivning saknas", "error"), 500);
            return;
        }

        fetch("http://10.0.2.2:8080/review/create", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}` },
            body: JSON.stringify({
                title, 
                description,
                userId: user.id,
                movieId
            }),
        })
        .then(res => {
            if(!res.ok) throw new Error("Något gick fel");
            return res.json();
        })
        .then(() => {
            setTitle("");
            setDescription("");
            setModalVisible(false);
            console.log("här kommer reviewcreated")
            onReviewCreated();
            showToast("Recensionen är skapad!", "success");
        })
        .catch(() => {
            showToast("Något gick fel", "error");
        })
    }

    return <>
    <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Skapa recension</Text>
    </Pressable>

    <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
            <View style={styles.modal}>
                <Text style={styles.modalTitle}>Skriv en recension</Text>
                <TextInput style={styles.input} value={title} placeholder="Titel" onChangeText={setTitle}></TextInput>
                <TextInput style={styles.input} value={description} placeholder="Beskrivning" onChangeText={setDescription}></TextInput>
                <Pressable onPress={handleSubmit} style={styles.createReviewButton}>
                    <Text style={styles.createReviewText}>Skapa recension</Text>
                </Pressable>

                <Pressable style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.cancelText}>Avbryt</Text>
                </Pressable>

            </View>
        </View>
    </Modal>

    </>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 16,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: 'white',
        padding: 24,
        margin: 24, 
        borderRadius: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8, 
        padding: 10, 
        marginBottom: 12,
    }, 

    createReviewButton: {
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 8,
    },
    createReviewText: {
        color: 'white',
        fontWeight: 'bold',
    },
    cancelButton: {
        alignItems: 'center',
        padding: 8,
    },
    cancelText: {
        color: 'gray',
    },
    modalTitle: {
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom: 16, 
    }
})
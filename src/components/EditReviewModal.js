import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

export default function EditReviewModal(){
    const { user } = useAuth();
    const { showToast } = useToast();
    const [title, setTitle] = useState(review?.title);
    const [description, setDescription] = useState(review?.description);

    const handleSubmit = () => {
        fetch(`http://10.0.2.2:8080/review/update/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify({ title, description }),
        })
        .then(res => {
            if(!res.ok) throw new Error("Något gick fel");
            return res.json();
        })
        .then(() => {
            onClose();
            onReviewUpdated();
            showToast("Recensionen är uppdaterad", "success");
        })
        .catch(() => showToast("Något gick fel", "error"));
        };
    return <>
    <Modal visible={review !== null} animationType="slide" transparent>
        <View style={styles.overlay}>
            <View style={styles.modal}>
                <Text style={styles.title}>Redigera recension</Text>
                <TextInput style={styles.input} value={title} onChangeText={setTitle}></TextInput>
                <TextInput style={styles.input} value={description} onChangeText={setDescription}></TextInput>
                <Pressable style={styles.saveButton} onPress={handleSubmit}>
                    <Text style={styles.saveText}>Spara</Text>
                </Pressable>
                <Pressable onPress={onClose}>
                    <Text style={styles.cancelText}>Avbryt</Text>
                </Pressable>
            </View>
        </View>

    </Modal>
    </>
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
    }, 
    modal: {
        backgroundColor: 'white',
        padding: 24,
        margin: 24, 
        borderRadius: 12
    }, 
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1, 
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10, 
        marginBottom: 12
    },
    saveButton: {
        backgroundColor: 'green',
        padding: 12, 
        borderRadius: 8, 
        alignItems: 'center',
        marginBottom: 8
    },
    saveText: {
        color: 'white',
        fontWeight: 'bold',
    },
    cancelText: {
        color: 'gray',
        textAlign: 'center',
        padding: 8,
    }
})
import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

export default function EditReviewModal(){
    const { user } = useAuth();
    const { showToast } = useToast();
    const [title, setTitle] = useState(review?.title);
    const [description, setDescription] = useState(review?.description);

    const handleSubmit = () => {
        fetch(`http://10.0.2.2:8080/review/update/${reviewi.id}`, {
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
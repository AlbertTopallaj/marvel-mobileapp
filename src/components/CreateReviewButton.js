import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";

export default function CreateReviewButton(){
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    

    return <>
    <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Skapa recension</Text>
    </Pressable>

    <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
            <View style={styles.modal}>
                <Text>Skriv en recension</Text>
                <TextInput value={title} placeholder="Titel"></TextInput>
                <TextInput value={description} placeholder="Beskrivning"></TextInput>
                <Pressable>
                    <Text>Skapa recension</Text>
                </Pressable>

            </View>
        </View>
    </Modal>

    </>
}

const styles = StyleSheet.create({
    button: {

    },

    buttonText: {

    }
})
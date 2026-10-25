import { useState } from "react";
import { Pressable, StyleSheet, Text} from "react-native";

export default function CreateReviewButton(){
    const [modalVisible, setModalVisible] = useState(false);

    return <>
    <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Skapa recension</Text>
    </Pressable>
    </>
}

const styles = StyleSheet.create({
    button: {

    },

    buttonText: {

    }
})
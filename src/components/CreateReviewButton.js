import { useState } from "react";
import { Pressable, StyleSheet, Text} from "react-native";

export default function CreateReviewButton(){
    const [modalVisible, setModalVisible] = useState(false);

    return <>
    <Pressable onPress={() => setModalVisible(true)}>
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
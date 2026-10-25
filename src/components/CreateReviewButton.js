import { Pressable, StyleSheet, Text} from "react-native";

export default function CreateReviewButton(){
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
import { StyleSheet, Text, TextInput, View } from "react-native";
import RegisterButton from "./RegisterButton";

export default function RegisterForm(){
    return <>

    <View style={styles.container}>
        <Text style={styles.header}>Registera dig</Text>
    <TextInput
    style={styles.input}
    placeholder="Ange ett användarnamn"
    placeholderTextColor="white">

    </TextInput>

    <TextInput
    placeholder="Ange ett lösenord"
    placeholderTextColor="white"
    style={styles.input}>
    </TextInput>
    <RegisterButton navigation={navigation}/>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        justifyContent: "center",
        padding: 24,
        gap: 12,
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "black",
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: "white",
    },
    header: {
        fontSize: 25,
        color: "black",
    }
})
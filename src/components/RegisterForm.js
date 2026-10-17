import { StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterForm(){
    return <>

    <View style={styles.container}>
        <Text style={styles.header}>Registera dig</Text>
    <TextInput
    style={styles.input}
    placeholder="Ange ett användarnamn">

    </TextInput>

    <TextInput
    placeholder="Ange ett lösenord"
    style={styles.input}>
    </TextInput>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
        gap: 12,
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
    }
})
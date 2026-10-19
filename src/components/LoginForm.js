import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("http://10.0.2.2:3000/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "applications/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

        } catch (error) {
            setError("Något gick fel.")
            console.log(error);
        }
    };


    return <>
    <View style={styles.container}>
        <Text style={styles.header}>Logga in</Text>
        <TextInput
        style={styles.input}
        placeholder="Ange ditt användarnamn"
        placeholderTextColor="white">

        </TextInput>

        <TextInput
        style={styles.input}
        placeholder="Ange ditt lösenord"
        placeholderTextColor="white">
    
        </TextInput>
        <Pressable></Pressable>
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
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: "black",
    },
    header: {
        fontSize: 25,
    }
})
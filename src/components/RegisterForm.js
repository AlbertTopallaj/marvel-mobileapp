import { StyleSheet, Text, TextInput, View } from "react-native";
import RegisterButton from "./RegisterButton";
import { useState } from "react";

export default function RegisterForm({ navigation }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
            console.log(username);
    console.log(password);
        try {
            const response = await fetch("http://10.0.2.2:8080/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        } catch (error) {
            // TILLFÄLLIG FELHANTERING, EJ FÄRDIGSTÄLLD
            console.log(error);
        }
    }



    return <>
    <View style={styles.container}>
        <Text style={styles.header}>Registera dig</Text>
    <TextInput
    style={styles.input}
    placeholder="Ange ett användarnamn"
    placeholderTextColor="white"
    value={username}
    onChangeText={setUsername}
    />


    <TextInput
    placeholder="Ange ett lösenord"
    placeholderTextColor="white"
    style={styles.input}
    value={password}
    onChangeText={setPassword}
    />

    <RegisterButton onRegister={handleRegister} navigation={navigation}/>
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
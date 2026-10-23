import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import LoginButton from "./LoginButton";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

export default function LoginForm({ navigation }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const { showToast } = useToast();

    const handleLogin = async () => {
        if(!username){
            showToast("Användarnamn saknas", "error");
            return;
        }

        if(!password){
            showToast("Lösenord saknas", "error");
            return;
        }
        try {
            const response = await fetch("http://10.0.2.2:8080/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if(!response.ok){
                showToast("Fel användarnamn eller lösenord", "error");
            }

            const data = await response.json();
            login(data.id, data.username, data.token);
            setUsername("");
            setPassword("");
            showToast(`Inloggningen lyckades, Välkommen åter ${username}`, "success");
        } catch (error) {
           showToast("Fel på serversidan, vänligen försök igen", "error");
        }
    };


    return <>
    <View style={styles.container}>
        <Text style={styles.header}>Logga in</Text>
        <TextInput
        style={styles.input}
        placeholder="Ange ditt användarnamn"
        placeholderTextColor="white"
        value={username}
        onChangeText={setUsername}
        />


        <TextInput
        style={styles.input}
        placeholder="Ange ditt lösenord"
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
        />
    
        <LoginButton onLogin={handleLogin} navigation={navigation}/>
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
        color: "white",
    },
    header: {
        fontSize: 25,
    }
})
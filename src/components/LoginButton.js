import { Pressable, Text, StyleSheet } from "react-native";

export default function LoginButton({ navigation }) {

    function navigateToRegister(navigation) {
        navigation.navigate("Login");
    }

    return <>
    <Pressable
    onPress={() => navigateToRegister(navigation)}
    style={styles.navigateButton}>
        <Text style={styles.registerText}>Har du inget konto?</Text>
    </Pressable>
    <Pressable
    style={styles.loginButton}>
        <Text style={styles.loginText}>Logga in</Text>
    </Pressable>
    </>
}

const styles = StyleSheet.create({
    navigateButton: {
        backgroundColor: "blue",
        padding: 14,
        borderRadius: 8,
        marginHorizontal: 24,
    },
    loginButton: {
        marginTop: 25,
        backgroundColor: "green",
        padding: 14,
        borderRadius: 8,
        marginHorizontal: 24,
    },
    registerText: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
    },
    loginText: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
    }
})
import { Pressable, StyleSheet, Text } from "react-native";

export default function LoginButton({ navigation }){

    function navigateToLogin(navigation) {
        navigation.navigate("Login");
    }

    return <>
    <Pressable
    onPress={() => navigateToLogin(navigation)}
    style={styles.navigateButton}>
        <Text style={styles.loginText}>Har du redan ett konto?</Text>
    </Pressable>
    <Pressable>
        <Text style={styles.registerText}>Registera</Text>
    </Pressable>
    </>
}

const styles = StyleSheet.create({
    loginText: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
    },
    navigateButton: {
        backgroundColor: "blue",
        padding: 14,
        borderRadius: 8,
        marginHorizontal: 24,
    }
})
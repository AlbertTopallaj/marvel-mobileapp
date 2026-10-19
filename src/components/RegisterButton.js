import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text } from "react-native";

export default function RegisterButton({ navigation }){

    function navigateToLogin(navigation) {
        navigation.navigate("Login");
    }

    // Nya standard, denna kommer jag att använda till nästa PR.
    //const navigation = useNavigation();

    return <>
    <Pressable
    onPress={() => navigateToLogin(navigation)}
    style={styles.navigateButton}>
        <Text style={styles.loginText}>Har du redan ett konto?</Text>
    </Pressable>
    <Pressable
    style={styles.registerButton}>
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
    },

    registerButton: {
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
    }
})
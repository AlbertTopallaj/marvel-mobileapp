import { Pressable, StyleSheet, Text } from "react-native";

export default function LoginButton({ navigation }){

    function navigateToLogin(navigation) {
        navigation.navigate("Login");
    }

    return <>
    <Pressable
    onPress={() => navigateToLogin(navigation)}>
        <Text style={styles.loginText}>Har du redan ett konto? Tryck här.</Text>
    </Pressable>
    </>
}

const styles = StyleSheet.create({
    loginText: {
        textAlign: "center",
    }
})
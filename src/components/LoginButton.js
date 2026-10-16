import { Pressable } from "react-native";

export default function LoginButton({ navigation }){

    function navigateToLogin(navigation) {
        navigation.navigate("Login");
    }

    return <>
    <Pressable
    onPress={() => navigateToLogin(navigation)}>
        <Text>Har du redan ett konto? Tryck här.</Text>

    </Pressable>
    </>
}
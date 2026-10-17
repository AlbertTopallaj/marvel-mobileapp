import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NavigateToRegisterForm({ navigation }){

    function navigateToRegister(navigation){
        navigation.navigate("Register");
    }

    return <>
    
    <Pressable onPress={() => navigateToRegister(navigation)}>
        <Ionicons name="log-in-outline" size={30} color="black" />
    </Pressable>
    </>
}
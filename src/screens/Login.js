import { ImageBackground, StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";
import LoginButton from "../components/LoginButton";

export default function Login(){
    return <>
    <ImageBackground
    style={styles.background}
    source={require("../pictures/avengers.jpg")}>
    <LoginForm></LoginForm>
    <LoginButton></LoginButton>
    </ImageBackground>
    </>
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
})
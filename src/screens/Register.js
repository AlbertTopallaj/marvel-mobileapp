import RegisterButton from "../components/RegisterButton";
import RegisterForm from "../components/RegisterForm";
import { ImageBackground, StyleSheet } from "react-native";

export default function Register({ navigation }) {
    // TODO: Add components
    return <>
    <ImageBackground
    style={styles.background}
    source={require("../pictures/avengers.jpg")}>
    <RegisterForm navigation={navigation}/>
    </ImageBackground>
    </>
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

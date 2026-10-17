import RegisterButton from "../components/RegisterButton";
import RegisterForm from "../components/RegisterForm";

export default function Register({ navigation }) {
    // TODO: Add components
    return <>
    <ImageBackground
    style={styles.background}
    source={require("../pictures/avengers.jpg")}>
    <RegisterForm/>
    <RegisterButton navigation={navigation}/>
    </ImageBackground>
    </>
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

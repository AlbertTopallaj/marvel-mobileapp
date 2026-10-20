import { ImageBackground, StyleSheet } from "react-native";

export default function ProfileInfo(){
    return <>
    <ImageBackground 
    style={styles.background}
    source={require("../pictures/avengers.jpg")}
    >
    </ImageBackground>
    </>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
})

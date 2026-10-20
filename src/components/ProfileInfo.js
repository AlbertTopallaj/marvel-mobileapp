import { ImageBackground, StyleSheet } from "react-native";
import ProfileCard from "./ProfileCard";

export default function ProfileInfo(){
    return <>
    <ImageBackground 
    style={styles.background}
    source={require("../pictures/avengers.jpg")}
    >
        <ProfileCard/>
    </ImageBackground>
    </>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
})

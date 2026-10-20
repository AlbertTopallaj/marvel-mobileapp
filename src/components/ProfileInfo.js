import { ImageBackground, StyleSheet } from "react-native";
import ProfileCard from "./ProfileCard";
import LogoutButton from "./LogoutButton";

export default function ProfileInfo(){
    return <>
    <ImageBackground 
    style={styles.background}
    source={require("../pictures/avengers.jpg")}
    >
        <ProfileCard/>
        <LogoutButton/>
    </ImageBackground>
    </>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
})

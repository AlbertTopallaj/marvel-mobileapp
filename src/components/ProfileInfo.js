import { ImageBackground, StyleSheet } from "react-native";
import ProfileCard from "./ProfileCard";
import LogoutButton from "./LogoutButton";
import DeleteAccountButton from "./DeleteAccountButton";
import UserReviews from "./UserReviews";

export default function ProfileInfo(){
    return <>
    <ImageBackground 
    style={styles.background}
    source={require("../pictures/avengers.jpg")}
    >
        <ProfileCard/>
        <UserReviews/>
        <LogoutButton/>
        <DeleteAccountButton/>
    </ImageBackground>
    </>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
})

import { ImageBackground, StyleSheet, View } from "react-native";
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

        <View style={styles.content}>
        <UserReviews/>
        <LogoutButton/>
        <DeleteAccountButton/>
        </View>
    </ImageBackground>
    </>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    content: {
        flex: 1,
        marginTop: 160, 
        padding: 24,
    }
})

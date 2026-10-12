import { Image, StyleSheet, View } from "react-native";

export default function ImageBackground(){
    return <>
    <View style={styles.background}>
        <Image source={require('../pictures/avengers.jpg')} />
    </View>
    </>
}

const styles = StyleSheet.create({
    background: {
        
    }
})
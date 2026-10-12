import { Image, StyleSheet, View } from "react-native";

export default function ImageBackground(){
    return <>
    <View style={styles.background}>
        <Image style={styles.image} source={require('../pictures/avengers.jpg')} />
    </View>
    </>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
})
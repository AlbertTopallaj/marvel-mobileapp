import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function MovieCard({ movie }) {
    const navigation = useNavigation();

    return <>
    <Pressable onPress={() => navigation.navigate('MovieDetail', { movie })}>
    <View style={styles.card}>
        <Text style={styles.title}>{movie.title}</Text>
    </View>
    </Pressable>    
    </>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 12,
        padding: 20,
        width: 300, 
        height: 200,
        justifyContent: 'flex-end',
    },

    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
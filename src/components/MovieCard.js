import { View, Text, StyleSheet } from "react-native";

export default function MovieCard({ movie }) {
    return <>
    <View style={styles.card}>
        <Text style={styles.title}>{movie.title}</Text>
    </View>
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
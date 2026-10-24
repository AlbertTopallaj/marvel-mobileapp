import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Detail({ route }){
    const { movie } = route.params;
    const [reviews, setReviews] = useState([]);

    return <>
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text styles={styles.info}>{movie.year}</Text>
        <Text styles={styles.description}>{movie.description}</Text>
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    title: {
        fontSize: 28, 
        fontWeight: 'bold',
        marginBottom: 8
    },
    info: {
        color: 'gray',
        marginBottom: 16,
    },
    description: {
        fontSize: 16, 
        lineHeight: 24,
    }
})
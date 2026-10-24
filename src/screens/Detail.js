import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import CreateReviewButton from "../components/CreateReviewButton";

export default function Detail({ route }){
    const { movie } = route.params;
    const [reviews, setReviews] = useState([]);

    const fetchReviews = () => {
    fetch(`http://10.0.2.2:8080/review/${movie.id}/reviews`)
    .then(res => res.json())
    .then(data => setReviews(data));
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return <>
    <View contentContainerStyle={styles.container}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text styles={styles.info}>{movie.year}</Text>
        <Text styles={styles.description}>{movie.description}</Text>

        <CreateReviewButton movieId={movieId} onReviewCreated={fetchReviews}/>
    </View>
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
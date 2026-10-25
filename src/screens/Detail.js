import { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import CreateReviewButton from "../components/CreateReviewButton";

export default function Detail({ route }){
    const { movie } = route.params;
    const [reviews, setReviews] = useState([]);

    const fetchReviews = () => {
    fetch(`http://10.0.2.2:8080/review/${movie.id}/reviews`)
    .then(res => { 
        if(!res.ok) return [];
        return res.json();
    })
    .then(data => setReviews(data));
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return <>
    <View style={styles.container}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.info}>{movie.year}</Text>
        <Text style={styles.description}>{movie.description}</Text>

        <CreateReviewButton movieId={movie.id} onReviewCreated={fetchReviews}/>

        <Text style={styles.reviewsTitle}>Recensioner</Text>
        <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({item }) => (
            <View style={styles.reviewCard}>
                <Text style={styles.reviewTitle}>{item.title}</Text>
                <Text style={styles.reviewDescription}>{item.description}</Text>
            </View>
        )}
        ListEmptyComponent={
            <Text style={styles.emptyText}>Inga recensioner än - var först med att skriva en!</Text>
        }
        
        >

        </FlatList>
    </View>
    </>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    reviewsTitle: {
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom: 12,
    }, 
    reviewCard: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8, 
        marginBottom: 12,
    },
    reviewTitle: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    reviewDescription: {
        fontSize: 14
    },
    emptyText: {
        color: 'gray',
        textAlign: 'center',
        marginTop: 16,
    }
    
})
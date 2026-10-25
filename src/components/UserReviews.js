import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"
import { useToast } from "../context/ToastContext";
import { FlatList, StyleSheet, View, Text } from "react-native";

export default function UserReviews(){
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);
    const { showToast } = useToast();

    useEffect(() => {
        fetch(`http://10.0.2.2:8080/review/get/${user.id}`, {
            headers: { "Authorization": `Bearer ${user.token}` }
        })
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(error => showToast("Något gick fel", "error"));
    }, []);

    return <>
    <FlatList
    data={reviews}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <View style={styles.card}>
            <Text style={styles.movieTitle}>{item.movie.title}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )}
    ListEmptyComponent={<Text style={styles.emptyText}>Inga recensioner gjorda ännu.</Text>}>

    </FlatList>
    </>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8, 
        marginBottom: 12,
    },

    movieTitle:  {
        color: 'black',
        fontSize: 12, 
        marginBottom: 4, 
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
    },
    emptyText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 16,
    }
})
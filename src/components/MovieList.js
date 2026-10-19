import { FlatList, StyleSheet } from "react-native";
import MovieCard from "./MovieCard";
import { useState } from "react";

const movies = [
    {
        id: "1",
        name: "Avengers",
        rating: "10",
    },
    {
        id: "2",
        name: "Avengers Endgame",
        rating: "11",
    }
]

export default function MovieList(){
    const [movies, setMovies] = useState([]);

    return <>
    <FlatList
    data={movies}
    horizontal={true}
    contentContainerStyle={styles.list}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <MovieCard movie={item}/>}>
    </FlatList>
    </>
}

const styles = StyleSheet.create({
    list: {
        gap: 200,
        padding: 50,
        alignItems: 'center',
        paddingBottom: 200,
    }
})
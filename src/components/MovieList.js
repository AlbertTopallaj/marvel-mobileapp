import { FlatList, Text } from "react-native";
import MovieCard from "./MovieCard";

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
    return <>
    <FlatList
    data={movies}
    horizontal={true}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <MovieCard movie={item}/>}>
    </FlatList>
    </>
}
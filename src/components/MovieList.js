import { FlatList } from "react-native";

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
    renderItem={renderMovie}>

    </FlatList>
    </>
}
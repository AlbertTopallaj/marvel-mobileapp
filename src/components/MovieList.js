import { FlatList, Text } from "react-native";

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

function renderMovie({ item }){
    return <>
    <Text>{item.name}</Text>
    </>
}

export default function MovieList(){
    return <>
    <FlatList
    data={movies}
    horizontal={true}
    keyExtractor={(item) => item.id}
    renderItem={renderMovie}>
    </FlatList>
    </>
}
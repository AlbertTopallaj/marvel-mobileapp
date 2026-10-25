import { FlatList, StyleSheet } from "react-native";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";

export default function MovieList(){
    const [movies, setMovies] = useState([]);
    const navigation = useNavigation();
    const [search, setSearch] = useState(""); 
    const [year, setYear] = useState("");
    
    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        fetch("http://10.0.2.2:8080/movie/find")
        .then(res => {
            return res.json()
    })
        .then(data => {
            setMovies(data);
        })
        .catch(error => console.log(error));
    }, []);

    return <>
    <SearchBar value={search} onChangeText={setSearch}></SearchBar>
    <FlatList
    data={filtered}
    horizontal={true}
    contentContainerStyle={styles.list}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <MovieCard movie={item} navigation={navigation}/>}>
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
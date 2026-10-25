import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";
import { useToast } from "../context/ToastContext";

export default function MovieList(){
    const [movies, setMovies] = useState([]);
    const navigation = useNavigation();
    const [search, setSearch] = useState(""); 
    const [year, setYear] = useState("");
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();
    
    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase()) && 
        (year ===  "" || movie.year.toString() === year )
    );

    useEffect(() => {
        setLoading(true);
        fetch("http://10.0.2.2:8080/movie/find")
        .then(res => {
            return res.json()
    })
        .then(data => {
            setMovies(data);
            setLoading(false);
        })
        .catch(error => {
            showToast("Något gick fel", "error");
            setLoading(false);
        });
    }, []);

    return <>
    <SearchBar value={search} onChangeText={setSearch} year={year} onYearChange={setYear}></SearchBar>
    {loading ?
    <ActivityIndicator size="large" color="white"></ActivityIndicator>
    :
    <FlatList
    data={filtered}
    horizontal={true}
    contentContainerStyle={styles.list}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <MovieCard movie={item} navigation={navigation}/>}>
    </FlatList>
    }
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
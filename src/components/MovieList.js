import { ActivityIndicator, FlatList, StyleSheet, View, Text} from "react-native";
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
        setTimeout(() => {
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
        }, 1500);
    }, []);

    return <>
    <View style={styles.layout}>
    <SearchBar value={search} onChangeText={setSearch} year={year} onYearChange={setYear}></SearchBar>
    {loading ?
    <View style={styles.loading}>
    <ActivityIndicator size="large" color="blue"></ActivityIndicator>
    </View>
    :
    <FlatList
    data={filtered}
    horizontal={true}
    contentContainerStyle={styles.list}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <MovieCard movie={item} navigation={navigation}/>}
    ListEmptyComponent={<Text style={styles.empty}>Inga filmer hittades</Text>}>
    </FlatList>
      }
    </View>
    </>
}

const styles = StyleSheet.create({
    list: {
        gap: 200,
        padding: 50,
        alignItems: 'center',
        paddingBottom: 200,
    }, 
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    layout: {
        flex: 1,
    },
    empty: {
        textAlign: 'center',
        color: 'white',
    }
})
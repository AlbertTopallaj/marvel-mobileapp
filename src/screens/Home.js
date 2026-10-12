import Header from "../components/Header";
import ImageBackground from "../components/ImageBackground";
import MovieList from "../components/MovieList";

export default function Home() {
    return <>
    <Header/>
    <ImageBackground>
            <MovieList/>
    </ImageBackground>
    </>
  
}
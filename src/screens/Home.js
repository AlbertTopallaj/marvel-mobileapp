import { ImageBackground, StyleSheet } from "react-native";
import Header from "../components/Header";
import MovieList from "../components/MovieList";

export default function Home() {
  return (
    <>
      <Header />
      <ImageBackground
        style={styles.background}
        source={require("../pictures/avengers.jpg")}
      >
        <MovieList />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

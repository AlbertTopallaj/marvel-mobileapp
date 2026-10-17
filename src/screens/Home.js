import { ImageBackground, StyleSheet } from "react-native";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import RegisterButton from "../components/RegisterButton";

export default function Home({ navigation }) {
  return (
    <>
      <Header />
      <RegisterButton navigation={navigation}/>
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

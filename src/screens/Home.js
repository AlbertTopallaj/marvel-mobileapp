import { ImageBackground, StyleSheet } from "react-native";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import NavigateToRegisterForm from "../components/NavigateToRegisterButton";

export default function Home({ navigation }) {
  return (
    <>
      <Header />
      <NavigateToRegisterForm navigation={navigation}/>
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

import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {

  const Stack = createNativeStackNavigator();

  return <>
  <NavigationContainer>

  <Home/>

  </NavigationContainer>
  </>
}


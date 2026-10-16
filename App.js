import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/screens/Register";

export default function App() {

  const Stack = createNativeStackNavigator();

  return <>
  <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen
      name="Home"
      component={Home}>
      </Stack.Screen>

      <Stack.Screen
      name="Register"
      component={Register}>
      </Stack.Screen>

     </Stack.Navigator>
  </NavigationContainer>
  </>
}


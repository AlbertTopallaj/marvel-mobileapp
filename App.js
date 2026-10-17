  import { NavigationContainer } from "@react-navigation/native";
  import Home from "./src/screens/Home";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import Register from "./src/screens/Register";
import Login from "./src/screens/Login";

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

        <Stack.Screen
        name="Login"
        component={Login}>
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
    </>
  }


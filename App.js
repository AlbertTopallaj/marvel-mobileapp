  import { NavigationContainer } from "@react-navigation/native";
  import Home from "./src/screens/Home";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import Register from "./src/screens/Register";
  import Login from "./src/screens/Login";
  import Profile from "./src/screens/Profile";
  import { AuthProvider, useAuth} from "./src/context/AuthContext";

   const Stack = createNativeStackNavigator();

   function AppNavigator(){
    const { user } = useAuth();

    return <>
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
        { user && (
        <Stack.Screen
        name="Profile"
        component={Profile}>
        </Stack.Screen>
        )}
    </Stack.Navigator>
    </>
   }

  export default function App() {

    return <>
    <AuthProvider>
    <NavigationContainer>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
    </AuthProvider>
    </>
  }


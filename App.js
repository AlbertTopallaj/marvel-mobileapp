  import { NavigationContainer } from "@react-navigation/native";
  import Home from "./src/screens/Home";
  import Register from "./src/screens/Register";
  import Login from "./src/screens/Login";
  import Profile from "./src/screens/Profile";
  import { AuthProvider, useAuth} from "./src/context/AuthContext";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

   const Tab = createBottomTabNavigator();

   function AppNavigator(){
    const { user } = useAuth();

    return <>
    <Tab.Navigator>
       <Tab.Screen
        name="Home"
        component={Home}>
        </Tab.Screen>

        <Tab.Screen
        name="Register"
        component={Register}>
        </Tab.Screen>

        <Tab.Screen
        name="Login"
        component={Login}>
        </Tab.Screen>
        { user && (
        <Tab.Screen
        name="Profile"
        component={Profile}>
        </Tab.Screen>
        )}
    </Tab.Navigator>
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


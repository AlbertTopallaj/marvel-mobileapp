  import { NavigationContainer } from "@react-navigation/native";
  import Home from "./src/screens/Home";
  import Register from "./src/screens/Register";
  import Login from "./src/screens/Login";
  import Profile from "./src/screens/Profile";
  import { AuthProvider, useAuth} from "./src/context/AuthContext";
  import { ToastProvider } from "./src/context/ToastContext";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  import { Ionicons } from "@expo/vector-icons";

   const Tab = createBottomTabNavigator();

   function NonAuthNavigator(){
    return <>

    <Tab.Navigator>
       <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons
            name="home"
            size={24}
            color="black"
            />
          )
        }}>
        </Tab.Screen>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: () => (
            <Ionicons
            name="log-in"
            size={24}
            color="black"
            />
          )
        }}>
        </Tab.Screen>
       <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: () => (
            <Ionicons
            name="person-add"
            size={24}
            color="black"
            />
          )
        }}>
        </Tab.Screen>
    </Tab.Navigator>
    </>
   }

   function AppNavigator(){

    return <>
    <Tab.Navigator>
     <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons
            name="home"
            size={24}
            color="black"
            />
          )
        }}>
        </Tab.Screen>
    <Tab.Screen
        name="Profile"
        component={Profile}
         options={{
          tabBarIcon: () => (
            <Ionicons
            name="person-circle"
            size={24}
            color="black"
            />
          )
        }}>
        </Tab.Screen>
    </Tab.Navigator>
    </>
}

function RootNavigator(){
  const { user, loading } = useAuth();

  if(loading) {
    
  }

  return user ? <AppNavigator/> : <NonAuthNavigator/>
}

  export default function App() {

    return <>
    <ToastProvider>
    <AuthProvider>
    <NavigationContainer>
      <RootNavigator></RootNavigator>
    </NavigationContainer>
    </AuthProvider>
    </ToastProvider>
    </>
  }


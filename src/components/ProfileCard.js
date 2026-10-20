import { View } from "react-native";

export default function ProfileCard(){
    const [greeting, setGreeting] = useState("");

    return <>
    <View>
        <Text>{greeting} {user}</Text>
    </View>
    </>
}
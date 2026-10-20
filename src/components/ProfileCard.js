import { useState } from "react";
import { View } from "react-native";

export default function ProfileCard(){
    const [greeting, setGreeting] = useState("");
    const [username, setUsername] = useState("");

    return <>
    <View>
        <Text>{greeting} {user}</Text>
    </View>
    </>
}
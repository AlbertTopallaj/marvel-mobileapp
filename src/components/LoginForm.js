import { Pressable, TextInput, View } from "react-native";

export default function LoginForm() {
    return <>
    <View style={styles.container}>
        <Text style={styles.header}>Logga in</Text>
        <TextInput
        style={styles.input}
        placeholder="Ange ditt användarnamn">

        </TextInput>

        <TextInput
        style={styles.input}
        placeholder="Ange ditt lösenord">


        </TextInput>
        <Pressable></Pressable>
    </View>
    </>
}
import { StyleSheet, TextInput, View } from "react-native";

export default function RegisterForm(){
    return <>
    <View style={styles.container}>
    <TextInput
    style={styles.input}
    placeholder="Ange ett användarnamn">

    </TextInput>

    <TextInput
    placeholder="Ange ett lösenord">
    style={styles.input}
    </TextInput>
    </View>
    </>
}

const styles = StyleSheet.create({

    
})
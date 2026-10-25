import { TextInput } from "react-native";

export default function SearchBar(){
    return <>
    <TextInput
    style={styles.input}
    placeholder="Sök film..."
    value={value}
    onChangeText={onChangeText}>
    </TextInput>
    </>
}
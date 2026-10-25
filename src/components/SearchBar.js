import { StyleSheet, TextInput } from "react-native";

export default function SearchBar(){
    return <>
    <TextInput
    style={styles.searchbar}
    placeholder="Sök film..."
    value={value}
    onChangeText={onChangeText}>
    </TextInput>
    </>
}

const styles = StyleSheet.create({
    searchbar: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 16, 
        backgroundColor: 'white', 
    }
})
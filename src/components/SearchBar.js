import { StyleSheet, TextInput } from "react-native";

export default function SearchBar({ value, onChangeText}){
    return <>
    <TextInput
    style={styles.searchbar}
    placeholder="Sök film..."
    value={value}
    onChangeText={onChangeText}>
    </TextInput>

    <TextInput
    style={styles.searchbar}
    placeholder="Sök film via år..."
    value={year}
    onChangeText={onYearChange}
    keyboardType="numeric">    
    </TextInput>
    </>
}

const styles = StyleSheet.create({
    searchbar: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 16,
        marginTop: 5, 
        backgroundColor: 'white', 
    }
})
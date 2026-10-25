import { StyleSheet, TextInput } from "react-native";

export default function SearchBar({ value, onChangeText, year, onYearChange}){
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
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 12,
        marginBottom: 16,
        marginTop: 15,
        backgroundColor: 'white', 
        paddingHorizontal: 16,
        fontSize: 15,
    }
})
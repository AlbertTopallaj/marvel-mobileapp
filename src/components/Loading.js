import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

export default function Loading(){
    return <>
    <View style={styles.loading}>
        <ActivityIndicator size="large"></ActivityIndicator>
        <Text>Appen laddas in...</Text>
    </View>
    </>

}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
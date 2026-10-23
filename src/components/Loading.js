import { ActivityIndicator, StyleSheet } from "react-native";

export default function Loading(){
    return <>
    <View style={styles.loading}>
        <ActivityIndicator size="large"></ActivityIndicator>
    </View>
    </>

}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

});
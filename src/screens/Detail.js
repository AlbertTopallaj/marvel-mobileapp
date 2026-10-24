import { ScrollView, Text } from "react-native";

export default function Detail({ route }){
    const { movie } = route.params;

    return <>
    <ScrollView contentContainerStyle={styles.container}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
    </ScrollView>
    </>
}
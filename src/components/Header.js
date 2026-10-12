import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
     return <>
     <View style={styles.header}>
        <Text style={styles.content}>Marvel Movies</Text>
     </View>
     </>
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        paddingTop: '100',
    },

    content: {
        color: 'white',
        textAlign: 'center',
        fontSize: 50,
        paddingBottom: 20,
    }
})
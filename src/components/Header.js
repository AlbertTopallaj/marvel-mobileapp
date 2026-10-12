import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header() {
     return <>
     <View style={styles.header}>
        <Image style={styles.image} source={require('../pictures/marvellogo.webp')}></Image>
     </View>
     </>
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        paddingTop: 50,
    },

    content: {
        color: 'white',
        textAlign: 'center',
        fontSize: 50,
        paddingBottom: 20,
    },
    
    image: {
        width: '100%',
        height: 60,
        resizeMode: 'contain',
    },
})
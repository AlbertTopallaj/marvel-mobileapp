import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function ProfileCard(){
    const { user } = useAuth();
    const hour = new Date().getHours();


    let greeting = "";
    if(hour < 12){
        greeting = "Good morning!";
    } else if(hour < 18){
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }

    return <>
    <View style={styles.card}>
        <Text style={styles.greeting}>{greeting} {user?.username}</Text>
    </View>
    </>
}

const styles = StyleSheet.create({
    card: {
        position: "absolute",
        bottom: 40,
        left: 24,
    },
    greeting: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },

});
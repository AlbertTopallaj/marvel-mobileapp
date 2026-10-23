import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function ProfileCard(){
    const { user } = useAuth();
    const hour = new Date().getHours();


    let greeting = "";
    if(hour < 12){
        greeting = "God morgon!";
    } else if(hour < 18){
        greeting = "God dag";
    } else {
        greeting = "Good kväll";
    }

    return <>
    <View style={styles.card}>
        <Text style={styles.greeting}>{greeting}, {user?.username}</Text>
    </View>
    </>
}

const styles = StyleSheet.create({
    card: {
        position: "absolute",
        top: 60,
        left: 24,
        right: 24,
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
    },
    greeting: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },

});
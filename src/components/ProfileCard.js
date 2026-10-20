import { useState } from "react";
import { View } from "react-native";

export default function ProfileCard(){
    const hour = new Date().getHours;


    let greeting
    if(hour < 12){
        greeting = "Good morning!";
    } else if(hour < 18){
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }

    return <>
    <View>
        <Text>{greeting} {username}</Text>
    </View>
    </>
}
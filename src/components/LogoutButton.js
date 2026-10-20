import { Pressable, View } from "react-native";

export default function LogoutButton() {
    const { logout } = useAuth();

    return <>
    <View>
        <Pressable onPress={() => }>
            <Text>Logga ut</Text>
        </Pressable>
    </View>
    </>
}
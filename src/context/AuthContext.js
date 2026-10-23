import { createContext, useContext, useState } from "react";
import * as SecureStore from "expo-secure-store";


const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = async (id, username, token) => {
        await SecureStore.setItemAsync("auth_token", token);
        setUser({ id, username, token });
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync("auth_token");
        setUser(null);
    };

    const deleteAccount = async (userId) => {
        const request = await fetch(
            `http://10.0.2.2:8080/user/delete/${userId}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );
        if(!request.ok) {
            throw new Error("Kunde inte radera kontot");
        }

        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, deleteAccount}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext);
}
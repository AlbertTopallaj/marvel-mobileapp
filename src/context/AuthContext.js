import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";


const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const STORAGE_KEY = "auth_user"

    useEffect(() => {
        const restoreSession = async () => {
            let savedUser = null;

            try {
                const saved = await SecureStore.getItem(token);

                if(!saved) return;

                savedUser = JSON.parse(saved);

                const request = await fetch(
                    `http://10.0.2.2:8080/user/validate`,
                    {
                        headers: {
                            Authorization: `Bearer ${savedUser.token}`,
                        },
                    }

                );
                if(request.ok){
                    setUser(savedUser);
                } else {
                    await SecureStore.deleteItemAsync(token);
                } 
                } catch (error) {
                    if(savedUser) setUser(savedUser);
                } finally {
                    setLoading(false);
                }
            };
            restoreSession();
        }, []);


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
        await SecureStore.deleteItemAsync("auth_token");
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
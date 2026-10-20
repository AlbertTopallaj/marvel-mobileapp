import { createContext, useState } from "react";


const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username, token) => {
        setUser({ username, token })
    };

    const logout = () => {
        setUser(null);
    }
}
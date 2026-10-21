import { createContext, useState } from "react";


const ToastContext = createContext();

export function ToastProvider({ children }){
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
}
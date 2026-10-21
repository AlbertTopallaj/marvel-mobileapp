import { createContext, useState } from "react";


const ToastContext = createContext();

export function ToastProvider({ children }){
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    function showToast(message, type = "info") {
        setMessage(message);
        setType(type);
        setVisible(true);

        setTimeout(() => {
            setVisible(false);
        }, 3000);
    }
    
}
import { createContext, useContext, useState } from "react";


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
    return <>
    <ToastContext.Provider value={{ showToast }}>
        {children}

        <Toast message={message} visible={visible} type={type}></Toast>
    </ToastContext.Provider>
    </>
}

    export function useToast(){
        return useContext(ToastContext);
    }

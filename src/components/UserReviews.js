import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"
import { useToast } from "../context/ToastContext";

export default function UserReviews(){
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);
    const { showToast } = useToast();

    useEffect(() => {
        fetch(`http://10.0.2.2:8080/review/get/${user.id}`, {
            headers: { "Authorization": `Bearer ${user.token}` }
        })
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(error => showToast("Något gick fel", "error"));
    }, []);

    return <>
 
    </>
}
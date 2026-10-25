import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"

export default function UserReviews(){
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://10.0.2.2:8080/review/get/${user.id}`, {
            
        })
    }

    return <>
 
    </>
}
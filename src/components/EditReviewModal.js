import { useState } from "react";

export default function EditReviewModal(){
    const { user } = useAuth();
    const { showToast } = useToast();
    const [title, setTitle] = useState(review?.title);
    const [description, setDescription] = useState(review?.description);

    const handleSubmit = () => {
        fetch(`http://10.0.2.2:8080/review/update/${reviewi.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify({ title, description }),
        })
        .then(res => {
            if(!res.ok) throw new Error("Något gick fel");
            return res.json();
        })
        .then(() => {
            onClose();
            onReviewUpdated();
            showToast("Recensionen är uppdaterad", "success");
        })
        .catch(() => showToast("Något gick fel", "error"));
        };
    return <>

    </>
}
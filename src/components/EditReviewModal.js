import { useState } from "react";

export default function EditReviewModal(){
    const { user } = useAuth();
    const { showToast } = showToast();
    const [title, setTitle] = useState(review?.title);
    const [description, setDescription] = useState(review?.description);

    const handleSubmit = () => {
        fetch(`http://10.0.2.2:8080/review/update/${reviewi.id}`, {
            
        })
    }

    return <>

    </>
}
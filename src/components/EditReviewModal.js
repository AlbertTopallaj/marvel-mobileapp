import { useState } from "react";

export default function EditReviewModal(){
    const { user } = useAuth();
    const { showToast } = showToast();
    const [title, setTitle] = useState(review?.title);
    const [description, setDescription] = useState(review?.description);
    
    return <>

    </>
}
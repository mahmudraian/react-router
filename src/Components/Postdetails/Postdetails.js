import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetails = () => {
    const post = useLoaderData();

    const navigate=useNavigate()
    const handlenevigat =()=>{
        navigate(`/friend/${post.id}`)
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={handlenevigat}>Get author</button>
        </div>
    );
};

export default Postdetails;
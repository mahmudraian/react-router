import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id}=post;
const nevigate = useNavigate()

const handlebutton =()=>{
nevigate(`/post/${id}`)
}

    return (
        <div className='post'>
            <h1>{post.title}</h1>
            <p>Body: {post.body}</p>
            <Link to={`/post/${id}`}>
            <button>Show details</button>
            </Link>
<button onClick={handlebutton}>Show Details 2</button>
        </div>
    );
};

export default Post;
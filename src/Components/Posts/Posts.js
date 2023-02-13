import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts= useLoaderData()
    console.log(posts);
    return (
        <div>
            <h1>This is post! Total Post: {posts.length}</h1>
            <p>{posts.title}</p>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Posts;
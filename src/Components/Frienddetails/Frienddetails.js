import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Frienddetails = () => {
    const friend = useLoaderData();
   
    return (
        <div>
            <h2>Everything you need to know!</h2>
            <h3>Name:{friend.name}</h3>
            <p>Call him/her:{friend.phone}</p>
        </div>
    );
};

export default Frienddetails;
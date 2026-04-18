import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    let params = Number(useParams().id)
    let friendsData = useLoaderData()
    console.log(params)
    console.log(friendsData)
     
    
    return (
        <div>
             i am your details
        </div>
    );
};

export default FriendDetails;
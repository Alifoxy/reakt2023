import React, { useEffect, useState } from 'react';
import { getUserPosts } from "./GetInfo";

export const UserPosts = ({userId, onRemoveUserPosts}) => {
    const [user, setUserPosts] = useState(null);
    useEffect(() => {
        if (userId) {
            getUserPosts(userId).then(resp => setUserPosts(resp))
        }
    }, [userId])
    console.log(user);
    if (!user) return null;
    return (
        <div>
            UserPosts
            <div>posts: {setUserPosts(userId)}</div>
            <button onClick={() => onRemoveUserPosts(null)}>Clean up user posts</button>
        </div>
    );
};
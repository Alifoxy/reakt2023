import React from 'react';

export const Album = ({album}) => {
    const {id, userId, title} = album;
    return (
        <div>
            <div>id:{id}</div>
            <div>user_id:{userId}</div>
            <div>title:{title}</div>
        </div>
    );

}


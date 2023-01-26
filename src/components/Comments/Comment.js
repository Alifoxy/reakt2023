import React from 'react';

export const Comment = ({comment}) => {
    const {id, postId, name} = comment;
    return (
        <div>
            <div>id:{id}</div>
            <div>post_id:{postId}</div>
            <div>name:{name}</div>
        </div>
    );

}


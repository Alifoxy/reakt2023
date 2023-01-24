import React, { useEffect, useState } from 'react';
import {getComments} from "./api/GetInfo";
import {Comment} from "./Comment";


export const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(resp => setComments(resp));
    }, []);

    return (
        <div className={'comments_block'}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
}


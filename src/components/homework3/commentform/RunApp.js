import React from 'react';
import { useEffect, useState } from "react";
import {CommentsForm} from "./CommentsForm";
import {Comments} from "./Comments";
import {getComments} from "../../../api/getInfo/getCommentsInfo";

export const App = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div>
            <div className={'main_block'}>
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
            </div>
        </div>
    );
};
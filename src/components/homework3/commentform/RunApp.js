import React from 'react';
import { useEffect, useState } from "react";
import {UsersForm} from "./UserForm";
import {Comments} from "./Users";
import {getComments} from "../../../api/getInfo/getCommentsInfo";

export const App = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div>
            <div className={'main_block'}>
            <UsersForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
            </div>
        </div>
    );
};
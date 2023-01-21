import React, { useState } from 'react';
import './style/RunAppCss.css'
import {Users} from "./Users";
import {UserPosts} from "./UserPosts";

export const App = () => {
    const [userId, setUserId] = useState(null);

    return (
        <div className={'main_block'}>
            <div className={'users_block'}><Users setUserId={setUserId}/></div>
            <div className={'posts_block'}>{userId && <UserPosts userId={userId}/>}</div>
        </div>
            );
        };
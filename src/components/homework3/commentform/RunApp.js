import React, { useState } from 'react';
import {Comments} from "./Comments";

export const App = () => {
    const [setCommentId] = useState(null);

    return (
        <div>
            <div className={'main_block'}>
                <div><Comments setCommentId={setCommentId}/></div>
            </div>
        </div>
            );
        };
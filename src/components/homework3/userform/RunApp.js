import React, { useState } from 'react';
import {Users} from "./Users";

export const App = () => {
    const [setUserId] = useState(null);

    return (
        <div>
            <div className={'main_block'}>
                <div><Users setUserId={setUserId}/></div>
            </div>
        </div>
            );
        };
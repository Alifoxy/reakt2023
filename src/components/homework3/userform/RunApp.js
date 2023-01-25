import React from 'react';
import { useEffect, useState } from "react";
import {UsersForm} from "./UserForm";
import {Users} from "./Users";
import {getUsers} from "../../../api/getInfo/getUsersInfo";

export const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers.getAll().then(({data}) => setUsers([...data]))
    }, []);

    return (
        <div>
            <div className={'main_block'}>
            <UsersForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
            </div>
        </div>
    );
};
import {Users} from "./Users";
import { useEffect, useState } from "react";
import {UsersForm} from "./UserForm";
import {getUsers} from "../../../api/getInfo";

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
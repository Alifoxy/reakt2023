import {Users} from "./Users";
import { useEffect, useState } from "react";
import {UsersForm} from "./UserForm";
import {getUsers} from "../../../api/GetInfo";

export const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(resp => setUsers(resp));
    }, []);

    return (
        <div>
            <div className={'main_block'}>
            <UsersForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>

            <div>
                <button onClick={() => setState((prevState) => [...prevState, 5, 6, 7, 8, 9, 10])}>Add state</button>
            </div>
            </div>
        </div>
    );
};
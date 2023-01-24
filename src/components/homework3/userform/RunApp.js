import {Users} from "./Users";
import { useEffect, useState } from "react";
import {UsersForm} from "./UserForm";
import {getUsers} from "./api/GetInfo";

export const App = () => {
    const [setUserId] = useState(null);
    const [users, setUsers] = useState([]);
    const [state, setState] = useState([1, 2 ,3 ,4]);
    console.log(state);

     useEffect(() => {
         getUsers().then(({data}) => setUsers([...data]))
     }, [])

    return (
        <div>
            <div className={'main_block'}>
                <div><Users setUserId={setUserId}/></div>
            </div>
            <UsersForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>

            <div style={{ marginTop: 300 }}>
                <button onClick={() => setState((prevState) => [...prevState, 5, 6, 7, 8, 9, 10])}>Add state</button>
            </div>
        </div>
    );
};
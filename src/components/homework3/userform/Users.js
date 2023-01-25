import React from 'react';
// import {User} from "./User";
// import { getUsers } from "../../../api/getInfo";

export const Users = ({users}) => {

    return (
        <div>
            {users.map(item => {
                const {id, username} = item;
                return (
                    <div key={id}>
                        <div>id:{id}</div>
                        <div>name:{username}</div>
                    </div>
                )
            })}
        </div>
    );

    // return (
    //     <div className={'users_block'}>
    //         {users.map(user => <User key={user.id} user={user}/>)}
    //     </div>
    // );
}


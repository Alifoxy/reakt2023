import React from 'react';

export const Users = ({users}) => {

    return (
        <div>
            {users.map(item => {
                const {id, username} = item;
                return (
                    <div key={id}>
                        <div>id:{id}</div>
                        <div>username:{username}</div>
                    </div>
                )
            })}
        </div>
    );

}


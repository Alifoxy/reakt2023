import React from 'react';

export const Users = ({users}) => {

    return (
        <div>
            {users.map(user => {
                const {id, username} = user;
                return (
                    <div key={this.id}>
                        <div>id:{id}</div>
                        <div>username:{username}</div>
                    </div>
                )
            })}
        </div>
    );

}


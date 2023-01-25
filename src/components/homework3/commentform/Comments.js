import React from 'react';

export const Comments = ({comments}) => {

    return (
        <div>
            <h1>Comments</h1>
            {comments.map(user => {
                const {id, name} = user;
                return (
                    <div key={id}>
                        <div>id:{id}</div>
                        <div>name:{name}</div>
                    </div>
                )
            })}
        </div>
    );

}


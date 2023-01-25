import {User} from "./User";

export const Users = ({users}) => {

    return (
        <div className={'users_block'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}


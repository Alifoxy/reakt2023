
export const User = ({user, setUserId}) => {
    const {id, name, email} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <button onClick={()=>setUserId(id)}>Show user posts</button>
        </div>
    );
};


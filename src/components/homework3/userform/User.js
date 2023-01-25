
export const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={'user_block'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};


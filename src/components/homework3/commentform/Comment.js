
export const Comment = ({comment}) => {
    const {id, name, email} = comment;

    return (
        <div className={'user_block'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
        </div>
    );
};


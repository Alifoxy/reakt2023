//import DescRMchar from "./components/Rick_&_Morty/character";
// import DescSimp from './components/simpsons/simpson';
import React, { useEffect, useState } from "react";
import { User } from "./componets/Users/User";
import { UserDets } from "./componets/Users/UserDets";
import { GetInfo } from "./components/Users/GetInfo";

function App() {
    const [users, setUsers] = useState([]);
    const [userPosts, setUserPosts] = useState(null);

    useEffect(() => {
        GetInfo().then(resp => setUsers(resp));
    }, []);

    return (
        <div className="App">
            <div className="info-block">
                {!!users.length && <User users={users} onSelectUser={setUserPosts}/>}
            </div>
            <div className="divider"/>
            <div className="post-block">
                {!!userPosts && <UserDets onRemoveUserPosts={setUserPosts} userPosts={userPosts}/>}
            </div>
        </div>
    );
}

export default App;
// export default DescSimp;
// export default DescRMchar;
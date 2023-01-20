//simpsons project run
//import {App} from './components/simpsons/Simpsons';

//rick & morty project run
import {App} from './components/rick_&_morty/Characters';

//import DescRMchar from "./components/Rick_&_Morty/character";
// import React, { useEffect, useState } from "react";
// import { Users } from "./components/Users/User";
// import { UserPosts } from "./components/Users/UserDets";
// import { getUsers } from "./components/Users/GetInfo";
//
// function App() {
//     const [users, setUsers] = useState([]);
//     const [userPosts, setUserPosts] = useState(null);
//
//     useEffect(() => {
//         getUsers().then(resp => setUsers(resp));
//     }, []);
//
//     return (
//         <div className="App">
//             <div className="info-block">
//                 {!!users.length && <Users users={users} onSelectUser={setUsers}/>}
//             </div>
//             <div className="divider"/>
//             <div className="post-block">
//                 {!!userPosts && <UserPosts onRemoveUserPosts={setUserPosts} userPosts={userPosts}/>}
//             </div>
//         </div>
//     );
// }
//
// export default App;
export{App};
// export default DescRMchar;
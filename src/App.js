import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AlbumsPage from "./pages/Albums/AlbumsPage";
import TodosPage from "./pages/Todos/TodosPage";
import CommentsPage from "./pages/Comments/CommentsPage";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <Header/>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'albums'} element={<AlbumsPage/>}/>
            <Route path={'todos'} element={<TodosPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}/>
        </Routes>
        </div>
    );
};

export default App;

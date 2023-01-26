import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AlbumsPage from "./pages/Albums/AlbumsPage";
import TodosPage from "./pages/Todos/TodosPage";
import CommentsPage from "./pages/Comments/CommentsPage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
    return (
        <div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>
        </Routes>
        </div>
    );
};

export default App;

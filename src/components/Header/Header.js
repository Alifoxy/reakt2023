import {Link} from "react-router-dom";
import React from 'react';
import * from'./Header.module.css';

const Header = () => {
    return (
        <div className={'Header'}>
            <Link to={"/"}>Home</Link>
            <Link to={"albums"}>Albums</Link>
            <Link to={"comments"}>Comments</Link>
            <Link to={"todos"}>Todos</Link>
        </div>
    );
};

export default Header;
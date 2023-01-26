import {Link} from "react-router-dom";
import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <Link to={'/'}>Home</Link>
            <Link to={'albums'}>Home</Link>
            <Link to={'comments'}>Home</Link>
            <Link to={'todos'}>Home</Link>

        </div>
    );
};

export default Header;
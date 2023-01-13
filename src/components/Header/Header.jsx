import React from "react";
import s from './Header.module.css';
import { FaBuysellads } from 'react-icons/fa'

const Header = () => {
    return (
        <header className={s.header}>
            <i><FaBuysellads /></i>
        </header>
    )
}

export default Header;
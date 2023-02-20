import React from "react";
import s from './Header.module.css';
import { FaBuysellads } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <i><FaBuysellads /></i>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}<button onClick={props.deleteLoginData}>logout</button></div>
                    : <NavLink to='login'>
                        Login
                    </NavLink>}
            </div>
        </header>
    )
}

export default Header;
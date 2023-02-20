import React from "react";
import confused from '../../assets/images/confused.png'
import s from './NotFound.module.css'

const NotFound = (props) => {

    return (
        <div className={s.notFound}>
            <span>Page Not Found</span>
            <img src={confused} alt="confused emoji" />
        </div>
    )
}

export default NotFound
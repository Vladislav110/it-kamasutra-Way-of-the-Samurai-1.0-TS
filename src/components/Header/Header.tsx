import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType ={
    isAuth:boolean,
    login: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png"
                alt="Картинка недоступна"/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'} >LOGIN</NavLink>}

            </div>
        </header>
    )
}

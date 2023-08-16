import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/redux_store";
import {logout} from "../../redux/auth_reducer";

type HeaderPropsType = {
    isAuth: boolean,
    login: string,
}

export const Header = (props: HeaderPropsType) => {

    const dispatch = useAppDispatch()
    const isLogout = useAppSelector((state) => state.auth.isAuth)


    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header className={s.header}>
            <img
                src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png"
                alt="Картинка недоступна"/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={logoutHandler}>Log out</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}

            </div>
        </header>
    )
}

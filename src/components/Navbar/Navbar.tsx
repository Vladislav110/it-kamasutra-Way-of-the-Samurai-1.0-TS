import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

type NavbarType = {
    menu: Array<string>
}

const Navbar = (props: NavbarType) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to ="/Profile" activeClassName ={s.activeLink}>{props.menu[0]}</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName ={s.activeLink}>{props.menu[1]}</NavLink>
            </div>
            <div className={s.item}>
                <a>{props.menu[2]}</a>
            </div>
            <div className={s.item}>
                <a>{props.menu[3]}</a>
            </div>
            <div className={s.item}>
                <a>{props.menu[4]}</a>
            </div>
        </nav>
    )
}
export default Navbar;
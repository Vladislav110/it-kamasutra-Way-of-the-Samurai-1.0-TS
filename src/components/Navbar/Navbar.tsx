import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

type NavbarType = {
  menu: Array<string>
}

const Navbar = (props:NavbarType) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Profile" activeClassName = {s.activeLink}>{props.menu[0]}</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Dialogs" activeClassName = {s.activeLink}>{props.menu[1]}</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" activeClassName = {s.activeLink}>{props.menu[2]}</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName = {s.activeLink}>{props.menu[3]}</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Setting" activeClassName = {s.activeLink}>{props.menu[4]}</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
import React from "react";
import s from "./Navbar.module.css";

type NavbarType = {
  menu: Array<string>
}

const Navbar = (props:NavbarType) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>props.menu[0]</a>
            </div>
            <div className={s.item}>
                <a>props.menu[1]</a>
            </div>
            <div className={s.item}>
                <a>props.menu[2]</a>
            </div>
            <div className={s.item}>
                <a>props.menu[3]</a>
            </div>
            <div className={s.item}>
                <a>props.menu[4]</a>
            </div>
        </nav>
    )
}

export default Navbar;
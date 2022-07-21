import React from "react";
import s from "./Header.module.css";


// type HeaderType = {
//   Header: string
// }

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png"
                alt="Картинка недоступна"/>
        </header>
    )
}

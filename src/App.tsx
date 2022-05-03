import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
    let menu = ["Profile", "Messages", "News", "Music", "Setting"]
    return (
        <div className='app-wrapper'>
            < Header />
            < Navbar menu = {menu} />
            < Profile />
        </div>
    );

}
export default App;

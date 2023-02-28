import React from "react";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/Users' render={() => <UserContainer/>}/>
                <Route path='/Login' render={() => <Login/>}/>
            </div>
        </div>
    );

}

export default App;

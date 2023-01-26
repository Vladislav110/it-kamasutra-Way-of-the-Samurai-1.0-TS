import React from "react";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/Users' render={() => <UserContainer/>}/>
            </div>
        </div>
    );

}

export default App;

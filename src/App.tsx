import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


type ProfilePagePropsType = {
    posts: Array<{ id: string, message: string, likesCount: number }>
    newPostText:string
}

type DialogPagePropsType = {
    dialogs: Array<{ id: string, name: string }>
    messages: Array<{ id: string, message: string }>
};

type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogPagePropsType
}

type StateType = {
    state: StatePropsType
    addPost: () => void
    changeNewPostText: (newPost: string) => void
}

const App = (props: StateType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                              messages={props.state.dialogsPage.messages}/>}/>
                <Route path='/Profile' render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}
                                                              changeNewPostText={props.changeNewPostText}  newPostText = {props.state.profilePage.newPostText}/>}/>
            </div>
        </div>

    );

}

export default App;

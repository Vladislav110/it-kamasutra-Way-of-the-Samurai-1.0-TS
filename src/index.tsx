import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state, addPost, changeNewPostText, StatePropsType, subscriber} from "./redux/state";

let rerenderEntireTree: (state:StatePropsType)=>void = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state} addPost ={addPost} changeNewPostText={changeNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(state);

subscriber(rerenderEntireTree)


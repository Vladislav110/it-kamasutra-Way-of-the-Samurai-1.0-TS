import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store, StatePropsType} from "./redux/state";

let rerenderEntireTree: (state:StatePropsType)=>void = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state = {store.getState()} addPost ={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree)


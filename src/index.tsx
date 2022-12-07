import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux_store";
import {StatePropsType} from "./redux/store";
import { Provider } from 'react-redux';

console.log('store', store)

let rerenderEntireTree = (state:StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
                <App  store={store}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})





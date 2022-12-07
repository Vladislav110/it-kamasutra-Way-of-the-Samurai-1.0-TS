import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StorePropsType} from "./redux/store";


type StoreType = {
    store: StorePropsType
}

const App: React.FC<StoreType> = (props) => {
    const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <Dialogs dialogs={state.dialogsPage}
                                                              dispatch={props.store.dispatch}
                />}/>
                <Route path='/Profile' render={() => <Profile profilePage={state.profilePage}
                                                              dispatch={props.store.dispatch}
                />}/>
            </div>
        </div>

    );

}

export default App;

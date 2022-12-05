import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StorePropsType} from "./redux/state";


type StateType = {
    store: StorePropsType
}

const App: React.FC<StateType> = (props) => {
    const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                              messages={state.dialogsPage.messages}/>}/>
                <Route path='/Profile' render={() => <Profile profilePage={state.profilePage}
                                                              dispatch={props.store.dispatch.bind(props.store)}
                />}/>
            </div>
        </div>

    );

}

export default App;

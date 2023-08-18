import React, {FC} from "react";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app_reducer";
import {AppStateType} from "./redux/redux_store";
import {Preloader} from "./components/common/Preloader/Preloader";


export type MapDispatchToPropsType = {
    initializeAppTC: () => void
}

export type MapStateToPropsType = {
    initialized: boolean
}

type AppType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
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
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<FC>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App);

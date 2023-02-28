import React, {FC} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {InitialStateType, setAuthThunkCreator, setUserDataActionCreator} from "../../redux/auth_reducer";
import {AppStateType} from "../../redux/redux_store";
import {compose} from "redux";


export type MapStatePropsType = {
    login: string,
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    setUserDataActionCreator: (data:InitialStateType) => void
    setAuthThunkCreator: ()=>void
}

class HeaderContainer extends React.Component<MapDispatchToPropsType & MapStatePropsType> {

    componentDidMount() {
       this.props.setAuthThunkCreator()
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose<FC>(connect(mapStateToProps, {setUserDataActionCreator,setAuthThunkCreator}))(HeaderContainer)

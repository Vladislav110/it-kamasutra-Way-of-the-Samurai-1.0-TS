import React, {FC} from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, setUserDataActionCreator} from "../../redux/auth_reducer";
import {AppStateType} from "../../redux/redux_store";
import {compose} from "redux";

export type MapStatePropsType = {
    login: string,
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    setUserDataActionCreator: (data:InitialStateType) => void
}

class HeaderContainer extends React.Component<MapDispatchToPropsType & MapStatePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserDataActionCreator(response.data.data)
                }
            })
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

export default compose<FC>(connect(mapStateToProps, {setUserDataActionCreator}))(HeaderContainer)

import React, {FC} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth_reducer";
import {AppStateType} from "../../redux/redux_store";
import {compose} from "redux";


export type MapStatePropsType = {
    login: string,
    isAuth: boolean
}



class HeaderContainer extends React.Component<MapStatePropsType> {

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

export default compose<FC>(connect(mapStateToProps, {logout}))(HeaderContainer)

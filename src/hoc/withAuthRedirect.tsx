import React, {FC} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux_store";


type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<T>(Component: FC<T>)  {
    const AuthRedirectComponent: FC<MapStateToPropsType> = (props)=> {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={"/Login"}/>

        return <Component  {...restProps as T}/>

    }

    let ConnectAuthRedirectComponent  =  connect(mapStateToProps)(AuthRedirectComponent)
    return ConnectAuthRedirectComponent
};


import React, {FC} from "react";
import {Profile} from "./Profile";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {getProfileThunkCreator, ProfilePropsType} from "../../redux/profile_reducer";
import {compose} from "redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

export type MapStatePropsType = {
    profile: ProfilePropsType
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    getProfileThunkCreator: (userId:string)=>void
}
export type OwnPropsType = MapStatePropsType & MapDispatchToPropsType

type PathParamType ={
    userId:string
}

type CommonPropsType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId ="2"
        }
       this.props.getProfileThunkCreator(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to = {"/Login"}/>
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


let WithUrlDataContainerComponent =  withRouter<CommonPropsType,any>(ProfileContainer)


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}

export default compose<FC>(connect (mapStateToProps, {getProfileThunkCreator}))(WithUrlDataContainerComponent)


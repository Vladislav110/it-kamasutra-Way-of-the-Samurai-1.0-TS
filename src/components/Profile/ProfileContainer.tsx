import React, {FC} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {ProfilePropsType, setUserProfile} from "../../redux/profile_reducer";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type MapStatePropsType = {
    profile: ProfilePropsType
}
export type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfilePropsType)=>void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)

        })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


let WithUrlDataContainerComponent =  withRouter<CommonPropsType,any>(ProfileContainer)


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose<FC>(connect (mapStateToProps, {setUserProfile}))(WithUrlDataContainerComponent)


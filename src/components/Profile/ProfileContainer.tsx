import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {
    getProfileThunkCreator,
    getStatusThunkCreator,
    ProfilePropsType,
    updateStatusThunkCreator
} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type MapStatePropsType = {
    profile: ProfilePropsType
    status: string
}
export type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
export type OwnPropsType = MapStatePropsType & MapDispatchToPropsType

type PathParamType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamType> & OwnPropsType

// function ProfileContainer(props: CommonPropsType) {
//
//     let userId = props.match.params.userId
//     if (!userId) {
//         userId = "27097"
//     }
//     props.getUserProfile(userId)
//     props.getStatus(userId)
//
//     return (
//         <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
//     )
// }

function ProfileContainer(props: CommonPropsType) {
    let userId = props.match.params.userId;
    if (!userId) {
        userId = "27097";
    }

    useEffect(() => {
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [props.getUserProfile, props.getStatus, userId]);

    return (
        <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    );
}



let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.FC>(
    connect(mapStateToProps, {
        getUserProfile: getProfileThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
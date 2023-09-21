import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {
    getProfileThunkCreator,
    getStatusThunkCreator, PhotoType,
    ProfilePropsType, savePhotoThunkCreator, saveProfileInfoThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {FormType} from "./ProfileInfo/ProfileDataForm";


export type MapStatePropsType = {
    profile: ProfilePropsType
    status: string
}
export type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (photo:PhotoType)=>void
    saveProfile: (profile:FormType)=>void
}
export type OwnPropsType = MapStatePropsType & MapDispatchToPropsType

type PathParamType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamType> & OwnPropsType

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
        <Profile isOwner={!!props.match.params.userId}
                 profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
                 savePhoto ={props.savePhoto}
                 saveProfile = {props.saveProfile}
        />
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
        updateStatus: updateStatusThunkCreator,
        savePhoto: savePhotoThunkCreator,
        saveProfile: saveProfileInfoThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
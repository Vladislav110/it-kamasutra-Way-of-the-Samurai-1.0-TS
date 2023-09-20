import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/RrofileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PhotoType, ProfilePropsType} from "../../redux/profile_reducer";



type ProfilesPropsType = {
    isOwner: boolean
    profile: ProfilePropsType
    status:string
    updateStatus:(status:string)=>void
    savePhoto: (photo:PhotoType)=>void
}

export const Profile = (props:ProfilesPropsType) => {
    return (
        <div>
            <div className={s.content}>
                <ProfileInfo  savePhoto={props.savePhoto} isOwner = {props.isOwner} profile ={props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

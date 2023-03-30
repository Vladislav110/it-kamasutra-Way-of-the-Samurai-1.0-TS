import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/RrofileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "../../redux/profile_reducer";



type ProfilesPropsType = {
    profile: ProfilePropsType
    status:string
    updateStatus:(status:string)=>void
}

export const Profile = (props:ProfilesPropsType) => {
    return (
        <div>
            <div className={s.content}>
                <ProfileInfo profile ={props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

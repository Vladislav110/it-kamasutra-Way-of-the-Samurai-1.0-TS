import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/RrofileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "../../redux/profile_reducer";
import {Redirect} from "react-router-dom";



type ProfilesPropsType = {
    profile: ProfilePropsType
}

export const Profile = (props:ProfilesPropsType) => {
    return (
        <div>
            <div className={s.content}>
                <ProfileInfo profile ={props.profile}/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

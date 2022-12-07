import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/RrofileInfo";
import {ActionsType} from "../../redux/store";

type ProfileType = {
    posts: Array<{ id: string, message: string, likesCount: number }>
    newPostText: string
}
type ProfilePagePropsType = {
    profilePage: ProfileType
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfilePagePropsType) => {

    return (
        <div>
            <div className={s.content}>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts posts={props.profilePage.posts}
                         dispatch={props.dispatch}
                         newPostText={props.profilePage.newPostText}/>
            </div>
        </div>
    )
}

import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/RrofileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <ProfileInfo/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/204/759/755/artwork-digital-art-abstract-simple-background-wallpaper-preview.jpg"
                    alt=""/>
            </div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OlkFY_KPKAJhAJ38aFS5k2LlXBKu1t7t5h2T0_78RSogSljdFjbOv6m_Xg46C1BPoDk&usqp=CAU"
                    alt=""/>
            </div>

            <MyPosts />
        </div>
    )
}

export default Profile;
import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfilePropsType} from "../../../redux/profile_reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


type ProfileProps ={
    profile: ProfilePropsType
    status:string
    updateStatus:(status:string)=>void
}


export const ProfileInfo = (props:ProfileProps) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div className={s.image}>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/204/759/755/artwork-digital-art-abstract-simple-background-wallpaper-preview.jpg"
                    alt=""/>
            </div>
            <div className ={s.descriptionBlock}>
                {props.profile.photos && <img src={props.profile.photos.small} alt=""/>}
                <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
                {props.profile.fullName && <span>{props.profile.fullName}</span>}
                {props.profile.lookingForAJobDescription && <p>{props.profile.lookingForAJobDescription}</p>}
            </div>

        </div>
    )
}


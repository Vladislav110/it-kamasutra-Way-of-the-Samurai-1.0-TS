import React from "react";
import s from "./ProfileInfo.module.css"
import {PhotoType, ProfilePropsType} from "../../../redux/profile_reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userImage.png"


type ProfileProps ={
    isOwner:boolean
    profile: ProfilePropsType
    status:string
    updateStatus:(status:string)=>void
    savePhoto: (photo:PhotoType)=>void
}


export const ProfileInfo = (props:ProfileProps) => {
    if(!props.profile){
        return <Preloader/>
    }
    const mainPhotoSelectedOn =(e:any)=>{
        if (e.target.files.length){
          props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.content}>
            <div className={s.image}>
                <img src="https://c4.wallpaperflare.com/wallpaper/204/759/755/artwork-digital-art-abstract-simple-background-wallpaper-preview.jpg"
                    alt=""/>
            </div>
            <div className ={s.descriptionBlock}>
                {props.profile.photos && <img src={props.profile.photos.large || userPhoto} alt="" className={s.mainPhoto}/>}
                {!props.isOwner && <input type={"file"} onChange={mainPhotoSelectedOn}/>}
                <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus}/>
                {props.profile.fullName && <span>{props.profile.fullName}</span>}
                {props.profile.lookingForAJobDescription && <p>{props.profile.lookingForAJobDescription}</p>}
            </div>

        </div>
    )
}


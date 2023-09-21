import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import {PhotoType, ProfilePropsType} from "../../../redux/profile_reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userImage.png"
import ProfileDataFormReduxForm, {FormType, ProfileDataForm} from "./ProfileDataForm";


export type ProfileProps = {
    isOwner: boolean
    profile: ProfilePropsType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photo: PhotoType) => void
    saveProfile:(profile:FormType)=>void
}
export type ProfileDataType = {
    goToEditMode?: () => void
    profile: ProfilePropsType,
    isOwner?: boolean,
}
type ContactType = {
    contactTitle?: string
    contactValue?: string
}


export const ProfileInfo = (props: ProfileProps) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const mainPhotoSelectedOn = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData:any) => {
       props.saveProfile(formData)
        setEditMode(false)
    }

    return (

        <div className={s.content}>
            <div className={s.descriptionBlock}>
                {props.profile.photos &&
                    <img src={props.profile.photos.large || userPhoto} alt="" className={s.mainPhoto}/>}
                {!props.isOwner && <input type={"file"} onChange={mainPhotoSelectedOn}/>}

                {editMode ? <ProfileDataFormReduxForm  onSubmit = {onSubmit} initialValues = {props.profile} /> : <ProfileData goToEditMode={() => {
                    setEditMode(true)
                }} profile={props.profile} isOwner={props.isOwner}/>}


                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}


const ProfileData = (props: ProfileDataType) => {
    return <div>
        {!props.isOwner && <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>: {props.profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>:{props.profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {props.profile.lookingForAJob &&
            <div>
                <b>My professionals skills</b>:{props.profile.lookingForAJobDescription}</div>}
        <div><b>About me</b>:{props.profile.aboutMe}<b/></div>
        <div><b>Contacts</b>:{props.profile.contacts && Object.keys(props.profile.contacts).map((key) => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}</div>
    </div>
}


export const Contact = (props: ContactType) => {
    return <div className={s.contact}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}



import {v1} from "uuid";
import {Dispatch} from "redux";
import {getProfile, getStatus, savePhoto, saveProfileInfo, updateStatus} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO = "SET_PHOTO";

type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusActionCreator>
    | ReturnType<typeof setPhotoActionCreator>
    | ReturnType<typeof setPhotoActionCreator>

export type PhotoType = {
    small: string
    large: string
}
export type ContactsPropsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
    [key: string]: string | undefined;
}

export type ProfilePropsType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: ContactsPropsType
    photos: PhotoType
}

export type PostsPropsType = {
    id: string,
    message: string
    likesCount: number
}

export type InitialStateType = typeof initialState


let initialState = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 22},
        {id: v1(), message: "It`s my first post", likesCount: 11},
        {id: v1(), message: "It`s my second post", likesCount: 12}
    ] as Array<PostsPropsType>,
    profile: {} as ProfilePropsType,
    status: "" as string
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: action.newPostText, likesCount: 0}
            return  {...state, posts: [...state.posts, newPost]}
        case SET_USER_PROFILE :
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photo}}
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}

export const setUserProfile = (profile: ProfilePropsType) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}

export const setStatusActionCreator = (status: string) => {
    return {
        type: SET_STATUS,
        status: status
    } as const
}

export const setPhotoActionCreator = (photo: PhotoType) => {
    return {
        type: SET_PHOTO,
        photo: photo
    } as const
}

export const getProfileThunkCreator = (userID: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await getProfile(userID);
    dispatch(setUserProfile(response.data))
}

export const getStatusThunkCreator = (userID: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await getStatus(userID);
    dispatch(setStatusActionCreator(response.data))
}

export const updateStatusThunkCreator = (status: string) => async (dispatch: Dispatch<ActionsType>) => {
    try{
        let response = await updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatusActionCreator(status))
        }
    } catch (error){
    // some error
    }
}

export const savePhotoThunkCreator = (photo: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await savePhoto(photo);
    if (response.data.resultCode === 0) {
        dispatch(setPhotoActionCreator(response.data.data.photos))
    }
}

export const saveProfileInfoThunkCreator = (profile: ProfilePropsType) => async (dispatch: Dispatch<any>) => {
    let response = await saveProfileInfo(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfileThunkCreator("27097"))
    } else {
        let action: any = stopSubmit('edit-profile', {"contacts": {error: response.data.messages[0]}})
        dispatch(action)
        return Promise.reject()
    }
}


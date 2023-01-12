import {v1} from "uuid";


const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

type PhotosType = {
    small: string
    large: string
}
type ContactsPropsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfilePropsType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsPropsType
    photos: PhotosType
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
    newPostText: "",
    profile: { } as ProfilePropsType
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: action.newPostText, likesCount: 0}
            let stateCopy = {...state, posts: [...state.posts, newPost]}
            stateCopy.newPostText = ''
            return stateCopy
        case CHANGE_NEW_POST_TEXT :
            state.newPostText = action.newPost
            return {...state}
        case SET_USER_PROFILE :
            return {...state, profile: action.profile}
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

export const changeNewPostTextActionCreator = (text: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPost: text
    } as const
}

export const setUserProfile = (profile: ProfilePropsType) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}
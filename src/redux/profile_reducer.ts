import {v1} from "uuid";
import {ActionsType, ProfilePagePropsType} from "./store";


const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 22},
        {id: v1(), message: "It`s my first post", likesCount: 11},
        {id: v1(), message: "It`s my second post", likesCount: 12}
    ],
    newPostText: " "
}


export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: action.newPostText, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case CHANGE_NEW_POST_TEXT :
            state.newPostText = action.newPost
            return state
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
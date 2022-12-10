import {v1} from "uuid";
import {ActionsType} from "./store";


const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

export type PostsPropsType = {
    id: string,
    message: string
    likesCount: number
};

let initialState = {
    posts:[
        {id: v1(), message: "Hi, how are you?", likesCount: 22},
        {id: v1(), message: "It`s my first post", likesCount: 11},
        {id: v1(), message: "It`s my second post", likesCount: 12}
    ] as Array<PostsPropsType>,
    newPostText: ""
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: action.newPostText, likesCount: 0}
       let  stateCopy = {...state, posts: [...state.posts,newPost]}
            stateCopy.newPostText = ''
            return stateCopy
        case CHANGE_NEW_POST_TEXT :
           state.newPostText = action.newPost
            return {...state}
        default:
            return state
    }
}

export type InitialStateType = typeof initialState

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
import {v1} from "uuid";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

type ActionsType =
    ReturnType<typeof followActionCreator>
    | ReturnType<typeof unfollowActionCreator>
    | ReturnType<typeof setUsersActionCreator>

// type LocationPropsType = {
//     city: string
//     country: string
// }
// export type UserPropsType = {
//     id: string
//     photos: string,
//     followed: boolean
//     name: string
//     status: string
//     location: LocationPropsType
// };

type PhotosType ={
    small: string
    large:string
}

export type UserPropsType = {
    name: string
    id: string
    photos: PhotosType
    status:string
    followed:boolean
}


export type InitialStateType = typeof initialState

let initialState = {
    users: [] as UserPropsType []
}
console.log("users", initialState)

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(el => (el.id === action.userID) ? {...el, followed: true} : el)}
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(el => (el.id === action.userID) ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


export const followActionCreator = (userID: string) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}

export const unfollowActionCreator = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}

export const setUsersActionCreator = (users:Array<UserPropsType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


type ActionsType =
    ReturnType<typeof followActionCreator>
    | ReturnType<typeof unfollowActionCreator>
    | ReturnType<typeof setUsersActionCreator>
    | ReturnType<typeof setCurrentPageActionCreator>
    | ReturnType<typeof setTotalUsersCountActionCreator>
    | ReturnType<typeof setIsFetchingActionCreator>

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
    users: [] as UserPropsType [],
    pageSize:20,
    totalUsersCount:0,
    currentPage:1,
    isFetching: false
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount:action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching:action.isFetching}
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

export const setCurrentPageActionCreator = (currentPage:number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
}

export const setTotalUsersCountActionCreator = (totalUsersCount:number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    } as const
}
export const setIsFetchingActionCreator = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    } as const
}





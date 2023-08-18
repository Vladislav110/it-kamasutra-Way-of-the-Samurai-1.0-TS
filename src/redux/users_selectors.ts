import {AppStateType} from "./redux_store";


export const getUsersSelector = (state:AppStateType)=>{
   return state.usersPage.users
}

export const getPageSize = (state:AppStateType)=>{
    return state.usersPage.pageSize
}

export const getCurrentPage = (state:AppStateType)=>{
    return state.usersPage.totalUsersCount
}

export const getTotalUserCount = (state:AppStateType)=>{
    return state.usersPage.totalUsersCount
}

export const getIsFetching = (state:AppStateType)=>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state:AppStateType)=>{
    return state.usersPage.followingInProgress
}



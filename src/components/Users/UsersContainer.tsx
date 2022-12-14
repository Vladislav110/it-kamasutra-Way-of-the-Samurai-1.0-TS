import React, {FC} from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator, UserPropsType
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux_store";
import {compose, Dispatch} from "redux";
import {UsersC} from "./UsersС";


export type MapStatePropsType = {
    users: Array<UserPropsType>
}
export type MapDispatchToPropsType = {
    followSubscriber: (userID: string) => void
    unfollowSubscriber: (userID: string) => void
    setUsers: (users: Array<UserPropsType>) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followSubscriber: (userID: string) => {
            dispatch(followActionCreator(userID))
        },
        unfollowSubscriber: (userID: string) => {
            dispatch(unfollowActionCreator(userID))
        },
        setUsers: (users: Array<UserPropsType>) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UserContainer = compose<FC>(connect(mapStateToProps, mapDispatchToProps))(UsersC )

export default UserContainer
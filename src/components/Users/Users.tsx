import React from "react";
import {UserPropsType} from "../../redux/users_reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserPropsType>
    followingInProgress: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export const Users = (props: UsersPropsType) => {
    return <div>
        <Paginator totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>

        <User
            users={props.users}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}/>
    </div>
}
import React, {FC} from "react";
import {connect} from "react-redux";
import {
    followThunkCreator, getUsersThunkCreator,
    setCurrentPageActionCreator, setIsFollowingProgressActionCreator,
    unfollowThunkCreator,
    UserPropsType
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux_store";
import {compose} from "redux";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsersSelector
} from "../../redux/users_selectors";


export type MapStatePropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}

export type MapDispatchToPropsType = {
    setUsers: (users: Array<UserPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (setTotalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    follow: (userID: string) => void
    unfollow: (userID: string) => void
}

type GetUsersPropsType = {
    currentPage: number,
    pageSize: number
}

export class UsersContainer extends React.Component<MapDispatchToPropsType & MapStatePropsType & GetUsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const UserContainer = compose<FC>(
    withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage: setCurrentPageActionCreator,
        getUsersThunk: getUsersThunkCreator,
        follow: followThunkCreator,
        unfollow: unfollowThunkCreator,
        followingInProgress: setIsFollowingProgressActionCreator
    }))(UsersContainer)

export default UserContainer

import React, {FC} from "react";
import {connect} from "react-redux";
import {
    followActionCreator, setCurrentPageActionCreator, setIsFetchingActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator, UserPropsType
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux_store";
import {compose} from "redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


export type MapStatePropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchToPropsType = {
    followSubscriber: (userID: string) => void
    unfollowSubscriber: (userID: string) => void
    setUsers: (users: Array<UserPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (setTotalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export class UsersContainer extends React.Component<MapDispatchToPropsType & MapStatePropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}& count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   followSubscriber={this.props.followSubscriber}
                   unfollowSubscriber={this.props.unfollowSubscriber}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         followSubscriber: (userID: string) => {
//             dispatch(followActionCreator(userID))
//         },
//         unfollowSubscriber: (userID: string) => {
//             dispatch(unfollowActionCreator(userID))
//         },
//         setUsers: (users: Array<UserPropsType>) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageActionCreator(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingActionCreator(isFetching))
//         }
//     }
// }

const UserContainer = compose<FC>(connect(mapStateToProps, {
    followSubscriber: followActionCreator,
    unfollowSubscriber: unfollowActionCreator,
    setUsers: setUsersActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    setTotalUsersCount: setTotalUsersCountActionCreator,
    setIsFetching: setIsFetchingActionCreator
}))(UsersContainer)

export default UserContainer

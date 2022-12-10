import React from "react";
import {addPostActionCreator, changeNewPostTextActionCreator, PostsPropsType} from "../../../redux/profile_reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux_store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & mapDispatchToPropsType

let mapStateProps = (state: AppStateType): MapStatePropsType => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
           dispatch(addPostActionCreator(newPostText))
        },
        updateNewPostText: (text: string) => {
            dispatch(changeNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
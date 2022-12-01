import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/RrofileInfo";


type ProfilePagePropsType = {
    posts: Array<{id:string, message: string, likesCount: number }>
    addPost: ()=>void
    changeNewPostText: (newPost:string)=>void
    newPostText:string
}

export const Profile = (props:ProfilePagePropsType) => {

    return (
        <div>
            <div className={s.content}>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts posts={props.posts} addPost={props.addPost}  changeNewPostText ={props.changeNewPostText}  newPostText ={ props.newPostText}/>
            </div>
        </div>
    )
}


// posts={props.state.posts}
//                 dispatch={store.dispatch}
//                 newPostText={props.state.newPostText}
//                 addPostActionCreator={addPostActionCreator}
//                 updateNewPostText ={updateNewPostText}


// type ProfilePagePropsType = {
//     posts: Array<{ message: string, likesCount: number }>
//     newPostText: string
// }
//
// type StatePropsType = {
//     state: ProfilePagePropsType
//     dispatch: (action: any) => void
//     addPostActionCreator: ()=>void
//     updateNewPostText: (text:string | undefined)=>void
// }
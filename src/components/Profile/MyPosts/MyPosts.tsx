import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post, PostsPropsType} from "./Post/Post";
import {ActionsType} from "../../../redux/state";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile_reducer";


type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
    dispatch: (action: ActionsType) => void
    newPostText: string
}



export const MyPosts = (props: ProfilePagePropsType) => {

    let postsElements = props.posts.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText));
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.dispatch(changeNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}



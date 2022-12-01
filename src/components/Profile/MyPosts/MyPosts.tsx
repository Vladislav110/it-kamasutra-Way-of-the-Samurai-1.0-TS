import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post, PostsPropsType} from "./Post/Post";



type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
    addPost: ()=>void
    changeNewPostText: (newPost:string)=>void
    newPostText:string
}

export const MyPosts = (props: ProfilePagePropsType) => {

    let postsElements = props.posts.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        console.log(props.newPostText)
        props.addPost ()
    }

    const onPostChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.changeNewPostText (text)
        console.log(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value = {props.newPostText}/>
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



import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {message: "Hi, how are you?", likesCount: '22'},
        {message: "It`s my first post", likesCount: '11'},
        {message: "It`s my second post", likesCount: '12'}
    ]
    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;
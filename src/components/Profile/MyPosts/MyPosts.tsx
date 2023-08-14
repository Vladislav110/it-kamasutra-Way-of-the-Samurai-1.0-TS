import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormNewPostType = {
    newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<FormNewPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={"newPostText"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormNewPostType>({form: "newPostText"})(AddNewPostForm)


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (values: FormNewPostType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}




import React from "react";
import s from "./Post.module.css";


export type PostsPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostsPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVT7KXYQ8uEG3LVXleY_e5t--XmqCby2lFQ&usqp=CAU"
                alt=""/>
            {props.message}
            <div>
                <span>{`Like ${props.likesCount}`}</span>
            </div>
        </div>
    )
}


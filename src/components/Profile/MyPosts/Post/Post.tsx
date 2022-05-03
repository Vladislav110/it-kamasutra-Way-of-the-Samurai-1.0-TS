import React from "react";
import s from "./Post.module.css";


const Post = (props: {message: string}) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVT7KXYQ8uEG3LVXleY_e5t--XmqCby2lFQ&usqp=CAU"
                alt=""/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;
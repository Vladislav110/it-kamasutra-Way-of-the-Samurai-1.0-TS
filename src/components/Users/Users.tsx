import React from "react";
import styles from "./Users.module.css";
import userImage from "../../assets/images/userImage.png";
import {UserPropsType} from "../../redux/users_reducer";


type UsersPropsType = {
    totalUsersCount: number
    pageSize:number
    currentPage:number
    followSubscriber: (userID: string) => void
    unfollowSubscriber: (userID: string) => void
    onPageChanged:(pageNumber: number)=>void
    users: Array<UserPropsType>
}

export const Users = (props:UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(el => {
                return <span className={props.currentPage === el ? styles.selectedPage : " "} onClick={(e)=>{props.onPageChanged(el)}}>{el}</span>
            })}
        </div>

        {props.users.map(el => <div key={el.id} id={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small != null ? el.photos.small : userImage}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {
                            props.unfollowSubscriber(el.id);
                        }}>Unfollow</button> : <button onClick={() => {
                            props.followSubscriber(el.id);
                        }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{"el.location.city"}</div>
                    </span>
                </span>

        </div>)}
    </div>;
}
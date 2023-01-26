import React from "react";
import styles from "./Users.module.css";
import userImage from "../../assets/images/userImage.png";
import { UserPropsType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followSubscriber: (userID: string) => void
    unfollowSubscriber: (userID: string) => void
    onPageChanged: (pageNumber: number) => void
    users: Array<UserPropsType>
    setIsFollowingProgress: (followingInProgress:boolean)=>void
    followingInProgress:boolean
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((el, index)=> {
                return <span key={index} className={props.currentPage === el ? styles.selectedPage : " "} onClick={(e) => {
                    props.onPageChanged(el)
                }}>{el}</span>
            })}
        </div>

        {props.users.map(el => <div key={el.id} id={el.id}>
                <span>
                    <div>
                        <NavLink to={"/Profile/" + el.id}>
                        <img src={el.photos.small != null ? el.photos.small : userImage}
                             className={styles.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {el.followed
                            ? <button disabled={props.followingInProgress} onClick={() => {
                                props.setIsFollowingProgress(true)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "401e95f2-35f8-4d3a-84f7-69ba825792b8"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollowSubscriber(el.id)
                                        }
                                        props.setIsFollowingProgress(false)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress} onClick={() => {
                                props.setIsFollowingProgress(true)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "401e95f2-35f8-4d3a-84f7-69ba825792b8"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.followSubscriber(el.id)
                                        }
                                        props.setIsFollowingProgress(false)
                                    })
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
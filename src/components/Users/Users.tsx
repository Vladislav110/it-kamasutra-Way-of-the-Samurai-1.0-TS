import React from "react";
import styles from "./Users.module.css";
import userImage from "../../assets/images/userImage.png";
import {UserPropsType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserPropsType>
    followingInProgress: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((el, index) => {
                return <span key={index} className={props.currentPage === el ? styles.selectedPage : ""}
                             onClick={() => {
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
                            ? <button disabled={!props.followingInProgress} onClick={() => {props.unfollow(el.id)}}>Unfollow</button>
                            : <button disabled={!props.followingInProgress} onClick={() => {props.follow(el.id)}}>Follow</button>}

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
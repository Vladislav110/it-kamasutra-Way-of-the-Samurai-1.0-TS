import React from "react";
import styles from "./User.module.css";
import userImage from "../../assets/images/userImage.png";
import {UserPropsType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";


type PropsType = {
    users: Array<UserPropsType>
    followingInProgress: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}


export const User = (props: PropsType) => {
    return <div>
        {
            props.users.map(el => <div key={el.id} id={el.id}>
                <span>
                    <div>
                        <NavLink to={"/Profile/" + el.id}>
                        <img src={el.photos.small != null ? el.photos.small : userImage}
                             className={styles.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {el.followed
                            ? <button disabled={!props.followingInProgress} onClick={() => {
                                props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button disabled={!props.followingInProgress} onClick={() => {
                                props.follow(el.id)
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

            </div>)
        }
    </div>
}
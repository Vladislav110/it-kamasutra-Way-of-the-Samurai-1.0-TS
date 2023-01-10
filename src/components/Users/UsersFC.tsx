import React from "react";
// import styles from "./Users.module.css";
// import {UserPropsType} from "../../redux/users_reducer";
// import axios from "axios";
// import userImage from "../../../src/assets/images/userImage.png"
//
// type UserType ={
//     users: Array<UserPropsType>
//     followSubscriber: (userID: string) =>void
//     unfollowSubscriber: (userID: string) =>void
//     setUsers: (users: Array<UserPropsType>) =>void
// }
//
// export const Users =(props:UserType)=> {
//     let getUsers = ()=> {
//         if(props.users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 props.setUsers(response.data.items)
//             })
//         }
//     }
//
//     return (
//         <div>
//             <button onClick={getUsers}>Get Users</button>
//             {
//                 props.users.map(el=> <div key = {el.id} id={el.id}>
//                    <span>
//                        <div>
//                            <img src={el.photos.small != null ? el.photos.small : userImage} className={styles.userPhoto}/>
//                        </div>
//                        <div>
//                            {el.followed ? <button onClick={()=>{props.unfollowSubscriber(el.id)}}>Unfollow</button> :  <button  onClick={()=>{props.followSubscriber(el.id)}}>Follow</button>}
//                        </div>
//                    </span>
//                    <span>
//                        <span>
//                            <div>{el.name}</div>
//                            <div>{el.status}</div>
//                        </span>
//                        <span>
//                            <div>{"el.location.country"}</div>
//                            <div>{"el.location.city"}</div>
//                        </span>
//                    </span>
//
//                 </div>)
//             }
//         </div>
//         )
//
// }
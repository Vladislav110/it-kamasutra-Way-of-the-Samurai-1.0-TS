import React from "react";
import axios from "axios";
import userImage from "../../assets/images/userImage.png";
import styles from "./Users.module.css";
import {MapDispatchToPropsType, MapStatePropsType} from "./UsersContainer";

export class UsersC extends React.Component<MapDispatchToPropsType & MapStatePropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {this.props.users.map(el => <div key={el.id} id={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small != null ? el.photos.small : userImage}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {
                            this.props.unfollowSubscriber(el.id);
                        }}>Unfollow</button> : <button onClick={() => {
                            this.props.followSubscriber(el.id);
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
}

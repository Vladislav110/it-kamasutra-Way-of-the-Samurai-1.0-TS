import axios from "axios";
import {FormDataType} from "../components/Login/Login";
import {ProfilePropsType} from "../redux/profile_reducer";


export const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}& count=${pageSize}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "401e95f2-35f8-4d3a-84f7-69ba825792b8"
        }
    })
        .then(response => response.data)
}

export const unfollow = (userID: string) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "401e95f2-35f8-4d3a-84f7-69ba825792b8"
        }
    })
}

export const follow = (userID: string) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "401e95f2-35f8-4d3a-84f7-69ba825792b8"
        }
    })
}

export const getProfile = (userID: string) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID, {
        withCredentials: true,
        headers: {
            "API-KEY": "401e95f2-35f8-4d3a-84f7-69ba825792b8"
        }
    })
}

export const getStatus = (userID: string) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0//profile/status/${userID}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "401e95f2-35f8-4d3a-84f7-69ba825792b8"
        }
    })
}

export const updateStatus = (status: string) => {
    return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: status}, {
        withCredentials: true,
        headers: {
            "API-KEY": "401e95f2-35f8-4d3a-84f7-69ba825792b8"
        }
    })
}

export const savePhoto = (photo: string) => {
    let formData = new FormData()
    formData.append("image", photo)

    return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/photo`, formData, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const getAuth = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    })
}

export const loginUser = (data:FormDataType) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, data, {
        withCredentials: true
    })
}

export const logoutUser = () => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`,{
        withCredentials: true
    })
}

export const saveProfileInfo = (profile:ProfilePropsType) => {
    return axios.put(`https://social-network.samuraijs.com/api/1.0/profile`, profile,{
        withCredentials: true
    })
}

export const getCaptcha = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0//security/get-captcha-url`,{
        withCredentials: true
    })
}





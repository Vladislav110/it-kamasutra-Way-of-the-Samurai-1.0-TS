import axios from "axios";


export const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}& count=${pageSize}`, {
        withCredentials: true
    })
        .then(response => response.data)
}

export const follow = (userID: string) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "401e95f2-35f8-4d3a-84f7-69ba825792b8"
        }
    })
}

export const unfollow = (userID: string) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "401e95f2-35f8-4d3a-84f7-69ba825792b8"
        }
    })
}

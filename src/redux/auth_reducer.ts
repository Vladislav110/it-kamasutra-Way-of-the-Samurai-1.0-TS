const SET_USER_DATA = "SET_USER_DATA";

type ActionsType = ReturnType<typeof setUserDataActionCreator>

export type InitialStateType = typeof initialState

let initialState = {
    userId: null,
    email: '',
    login: '',
    isAuth: false
}
console.log("users", initialState)

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setUserDataActionCreator = (data: InitialStateType) => {
    return {
        type: SET_USER_DATA,
        data: data
    } as const
}




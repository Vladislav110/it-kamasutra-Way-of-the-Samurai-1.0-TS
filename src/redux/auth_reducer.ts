import {getAuth, loginUser, logoutUser} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer} from "./redux_store";
import {Dispatch} from "redux";
import {FormDataType} from "../components/Login/Login";


const SET_USER_DATA = "SET_USER_DATA";
const LOGOUT_USER = "LOGOUT_USER_DATA"

type ActionsType = ReturnType<typeof setUserDataActionCreator> | ReturnType<typeof logoutActionCreator>

export type InitialStateType = typeof initialState

let initialState = {
    userId: null,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case LOGOUT_USER:
            return {...state, isAuth: action.isAuth}
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

export const logoutActionCreator = (isAuth: boolean) => {
    return {
        type: LOGOUT_USER,
        isAuth: isAuth
    } as const
}


export const setAuthThunkCreator = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        getAuth().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataActionCreator(response.data.data))
            }
        })
    }
}

// export const login = (data: FormDataType) => {
//     return (dispatch: ThunkDispatch<ReturnType<typeof reducer>, unknown, ActionsType>) => {
//         loginUser(data).then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthThunkCreator())
//             }
//         })
//     }
// }

export const login = (data: FormDataType): ThunkAction<void, ReturnType<typeof reducer>, unknown, ActionsType> => {
    return async (dispatch: ThunkDispatch<ReturnType<typeof reducer>, unknown, ActionsType>) => {
        try {
            const response = await loginUser(data);
            if (response.data.resultCode === 0) {
                dispatch(setAuthThunkCreator());
            } else {
                console.log("Incorrect Email or Password")
            }
        } catch (error) {
            console.log("Incorrect Email or Password")
        }
    };
}

export const logout = () => {
    return (dispatch: ThunkDispatch<ReturnType<typeof reducer>, unknown, ActionsType>) => {
        logoutUser().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(logoutActionCreator(false))
            }
        })
    }
}




